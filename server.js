require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 4000;
const cors = require('cors');
const cfenv = require('cfenv');

var db = "";

try {
    mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log("connected"));
    db = mongoose.connection;
    db.on("error", (error) => console.error(error));
    db.once("open", () => console.log("Conectando a la base de datos..."));
} catch (error) {
    console.log(error);
}

const comprasRouter = require('./routes/compras-routes');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/compras", comprasRouter);
app.listen(port, () => console.log("escuchando"+port));