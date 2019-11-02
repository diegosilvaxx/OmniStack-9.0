const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const routes = require("../src/routes");

const app = express();

mongoose.connect(
  "mongodb+srv://omnistack:Diego@39653475@omnistack-jzieh.mongodb.net/semana09?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para edição, delete)
//req.body = Acessar corpo da requisição (para edição, delete)
// app.use(cors({ origin: 'http://localhost.com'})) para somente o site especifico consumir a api
app.use(cors());
app.use(express.json());
app.use("/files", express.static(path.resolve(__dirname, "..", "uploads")));
app.use(routes);

app.listen(3333);
