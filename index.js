const express = require("express");
const path = require("path");
require('dotenv').config();

const router = require('./app/router');

const PORT = process.env.PORT || 4000;

// création du serveur express
const app = express();
// configuration du serveur
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./app/views"));
app.use(express.static(path.join(__dirname, "./public")));

app.use(router);

// démarrage du serveur
app.listen(PORT, () => {
    console.log(`Serveur listening on port http://localhost:${PORT}/`);
});
