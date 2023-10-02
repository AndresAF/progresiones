const app = require("express")()
const router = require("../routes/index")
const exphbs = require("express-handlebars")
const handlebars = require("handlebars")
const express = require("express")
bodyParser = require('body-parser');


//hbs 
const hbs = exphbs.create({
    defaultLayout: "main",
    extname: ".hbs"

})

app.engine("hbs", hbs.engine);
app.set('view engine', 'hbs');


// middleware

app.use(express.static("public"));
app.use(router);

app.listen(3000, (req, res) => {
    console.log("rolling")
})