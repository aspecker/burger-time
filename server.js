const express = require('express');
const bodyParser = require('body-parser');

// setup express and bodyparser
const app = express ();

const PORT = process.env.PORT || 8080;

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

// require handlebars
const exphbs = require('express-handlebars');
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require('./controllers/burgersController.js');
app.use(routes);

app.listen(PORT, () =>{
    console.log(`Listening on ${PORT}`);
});