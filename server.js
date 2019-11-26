const express = require("express")
const exphbs = require("express-handlebars")
const db = require("./models")

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({
    defaultLayout: "main",
    partialsDir: __dirname + '/views/partials/'
}));
app.set("view engine", "handlebars");

const routes = require("./routes/routes.js");
app.use(routes);

db.sequelize.sync().then(function () {

    app.listen(PORT, function () {
        console.log("listening " + PORT)
    })
})