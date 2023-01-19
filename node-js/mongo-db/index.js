const { v4: uuid } = require("uuid");
const mongoose = require("mongoose");
const express = require("express");
const Joi = require("joi");

const app = express();

const PORT = 8080;
const users = [];

const posts = [];

let loggedUser = null;

let UserSchema = new mongoose.Schema({
  name: String,
  surname: String,
  age: Number,
  email: String,
  password: String,
});

let PostSchema = new mongoose.Schema({
  description: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

let UserModel = mongoose.model("User", UserSchema);
let PostModel = mongoose.model("Post", PostSchema);

mongoose.set("strictQuery", false);
mongoose
  .connect(`<mongodbURL>`)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log(err));

const registerSchema = Joi.object({
  name: Joi.string().required(),
  surname: Joi.string().required(),
  age: Joi.number().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(4).alphanum().required(),
});
const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(4).alphanum().required(),
});
const newPostSchema = Joi.object({
  description: Joi.string().max(80).required(),
});

app.use(express.json());

app.post(
  "/api/register",
  (req, res, next) => {
    const { error } = registerSchema.validate(req.body);

    if (error == null) next();
    else {
      const { details } = error;
      const message = details.map((i) => i.message).join(",");
      res.status(422).json({ error: message });
    }
  },
  async (req, res) => {
    let newUser = new UserModel({ ...req.body });
    await newUser.save();
    users.push(newUser);
    res.send({ message: "succes", newUser });
  }
);

app.post(
  "/api/login",
  (req, res, next) => {
    const { error } = loginSchema.validate(req.body);

    if (error == null) next();
    else {
      const { details } = error;
      const message = details.map((i) => i.message).join(",");
      res.status(422).json({ error: message });
    }
  },
  async (req, res) => {
    let user = await UserModel.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (user) {
      loggedUser = user;
      res.send({ message: "logged in!" });
    } else {
      res.status(400).send({ message: "user not found!" });
    }
  }
);

app.post("/api/logout", (req, res) => {
  loggedUser = null;

  res.send("logged out");
});

app.get("/api/users", async (req, res) => {
  let users = await UserModel.find();
  res.send(users);
});

app.use((req, res, next) => {
  if (loggedUser) next();
  else res.status(403).send("Must login!");
});

app.get("/api/posts", async (req, res) => {
  let posts = await PostModel.find();
  res.send(posts);
});

app.post(
  "/api/post",
  (req, res, next) => {
    const { error } = newPostSchema.validate(req.body);

    if (error == null) next();
    else {
      const { details } = error;
      const message = details.map((i) => i.message).join(",");
      res.status(422).json({ error: message });
    }
  },
  async (req, res) => {
    const newPost = new PostModel({
      description: req.body.description,
      user: loggedUser._id,
    });
    await newPost.save();
    posts.push(newPost);
    res.status(201).send({ message: "succesfully added!", post: newPost });
  }
);

app.listen(PORT, () => {
  console.log("Server running on " + PORT);
});

//WapmJpf0KnyYslYz
