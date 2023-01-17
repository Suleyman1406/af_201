const express = require("express");
// const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");

const app = express();
const PORT = 7777;

const products = [
  {
    id: "1",
    name: "Macbook",
    type: "electronic",
    price: 1400,
  },
  {
    id: "2",
    name: "Lenovo agir olan",
    type: "electronic",
    price: 300000,
  },
  {
    id: "3",
    name: "NasCoffe",
    type: "drink",
    price: 10,
  },
  {
    id: "4",
    name: "Meccoffe",
    type: "drink",
    price: 12,
  },
  {
    id: "5",
    name: "Domuz ciftligi",
    type: "book",
    price: 999,
  },
  {
    id: "6",
    name: "Prado",
    type: "book",
    price: 99,
  },
];

let isLoggedIn = false;

app.use(express.json());
// app.use(bodyParser.json());

app.get("/api", (req, res) => {
  res.send("Welcome to our api");
});

app.post("/api/login", (req, res) => {
  isLoggedIn = true;
  res.send({ message: "success" });
});

app.use((req, res, next) => {
  if (!isLoggedIn) {
    res.status(401).send({ message: "You must login!" });
    return;
  }
  next();
});

app.get(
  "/api/products",
  (req, res, next) => {
    if (!isLoggedIn) {
      res.status(401).send({ message: "You must login!" });
      return;
    }
    next();
  },
  (req, res) => {
    let { type } = req.query;
    if (type) {
      res.send({
        message: "success",
        products: products.filter(
          (p) => p.type.toLowerCase().trim() === type.toLowerCase().trim()
        ),
      });
      return;
    }

    res.send({ message: "success", products });
  }
);

app.get("/api/products/:id", (req, res) => {
  const { id } = req.params;
  let product = products.find((p) => p.id === id);

  if (product) {
    res.send({
      message: "success",
      product,
    });
  } else res.status(204).send();
});

app.post("/api/products", (req, res) => {
  console.log(req.body);
  const { name, type, price } = req.body || {};
  if (!name || !type || !price) {
    res.status(400).send({ message: "Name, type and price are required!" });
    return;
  }
  let newProduct = {
    name,
    type,
    price,
    id: uuidv4(),
  };
  products.push(newProduct);

  res
    .status(201)
    .send({ message: "Product successfully added!", product: newProduct });
});

app.put("/api/products/:id", (req, res) => {
  const { id } = req.params;
  const { name, type, price } = req.body;
  let product = products.find((p) => p.id === id);
  if (!product) return res.status(204).send();
  if (!name && !type && !price)
    return res.status(400).send({ message: "Name or type or price required!" });
  if (name) product.name = name;
  if (type) product.type = type;
  if (price) product.price = price;
  res.send({ message: "Product successfully updated!", product });
});

app.delete("/api/products/:id", (req, res) => {
  const { id } = req.params;
  let productIndex = products.findIndex((p) => p.id === id);
  if (productIndex === -1) return res.status(204).send();
  let deletedProduct = products.splice(productIndex, 1);
  res.send({
    message: "Product successfully deleted!",
    product: deletedProduct,
  });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
