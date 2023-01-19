const mongoose = require("mongoose");
const express = require("express");
const Joi = require("joi");

const app = express();

const PORT = 8080;
let loggedUser = null;

/* Creating a new schema for the User model. */
const UserSchema = new mongoose.Schema({
  name: String,
  surname: String,
  age: Number,
  email: String,
  password: String,
  cart: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

const ProductSchema = new mongoose.Schema({
  price: Number,
  name: String,
  description: String,
});

const UserModel = mongoose.model("User", UserSchema);
const ProductModel = mongoose.model("Product", ProductSchema);

mongoose.set("strictQuery", false);
mongoose
  .connect(`<mongoDBURL>`)
  .then(() => console.log("Connected to database"))
  .catch((err) => console.error(err));

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

const addProductSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().required(),
});

app.use(express.json());

app.post(
  "/api/register",
  (req, res, next) => {
    let { error } = registerSchema.validate(req.body);
    if (!error) {
      next();
    } else {
      const { details } = error;
      const message = details.map((i) => i.message).join(",");
      res.status(422).json({ error: message });
    }
  },
  async (req, res) => {
    // let user = await UserModel.findOne({ email: req.body.email });

    // if (user)
    //   return res
    //     .status(400)
    //     .send({ message: "user already exist with this email" });

    // const newUser = new UserModel({
    //   ...req.body,
    // });

    // newUser
    //   .save()
    //   .then(() => res.send({ message: "User succesfully created!" }))
    //   .catch((err) => res.status(500).send({ err }));

    UserModel.findOne({ email: req.body.email }, (error, user) => {
      if (error) return res.status(500).send({ error });

      if (user)
        return res
          .status(400)
          .send({ message: "user already exist with this email" });
      const newUser = new UserModel({
        ...req.body,
      });

      newUser
        .save()
        .then(() => res.send({ message: "User succesfully created!" }))
        .catch((err) => res.status(500).send({ err }));
    });
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
    UserModel.findOne(
      {
        email: req.body.email,
        password: req.body.password,
      },
      (error, user) => {
        if (error) return res.status(500).send({ error });

        if (user) {
          loggedUser = user;
          res.send({ message: "Logged in!" });
        } else res.status(400).send({ message: "User nor found!" });
      }
    );
  }
);

app.post("/api/logout", (req, res) => {
  loggedUser = null;

  res.send("logged out");
});

app.use((req, res, next) => {
  if (loggedUser) next();
  else res.status(403).send("Must login!");
});

/* Creating a new product and saving it to the database. */
app.post(
  "/api/products",
  (req, res, next) => {
    const { error } = addProductSchema.validate(req.body);

    if (error == null) next();
    else {
      const { details } = error;
      const message = details.map((i) => i.message).join(",");
      res.status(422).json({ error: message });
    }
  },
  async (req, res) => {
    const newProduct = new ProductModel({ ...req.body });

    await newProduct.save();
    res
      .status(201)
      .send({ message: "Product succesfully added!", product: newProduct });
  }
);

/* Getting all the products from the database and sending them to the client. */
app.get("/api/products", (req, res) => {
  ProductModel.find(null, "name price", (error, products) => {
    if (error) return res.status(500).send({ error });
    res.send(products);
  });
});

/* Deleting the product with the id that is passed in the url. */
app.delete("/api/products/:id", (req, res) => {
  if (req.params.id)
    ProductModel.findByIdAndDelete(req.params.id, (error, data) => {
      if (error) return res.status(500).send({ error });

      res.send(data);
    });
});

/* Getting all the users from the database and sending them to the client. */
app.get("/api/users", (req, res) => {
  UserModel.find(null, "name surname age email cart")
    .so.populate("cart")
    .exec((error, data) => {
      if (error) return res.status(500).send({ error });

      res.send(data);
    });
});

app.post("/api/user/cart/:productId", (req, res) => {
  UserModel.findByIdAndUpdate(
    loggedUser._id,
    {
      $push: {
        cart: req.params.productId,
      },
    },
    (error, data) => {
      if (error) return res.status(500).send({ error });

      res.send(data);
    }
  );
});

/* Listening to the port 8080 and if it is running it will print "Server running on 8080" */
app.listen(PORT, () => {
  console.log("Server running on " + PORT);
});

//tToPWKu3OUkT5kQG
