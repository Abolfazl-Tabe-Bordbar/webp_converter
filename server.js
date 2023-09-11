const express = require("express");
const app = express();
const routes = require("./modules/routes");
const cors = require("./modules/middlewares/cors/index");
const bodyParser = require("body-parser");



app.use(cors);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/",routes);


app.use((req,res) => {
    res.json({
       status : false,
    });
});

app.listen(4000);