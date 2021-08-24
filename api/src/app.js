const express= require("express");
const app= express();
const cors= require("cors");

const graphicsRoutes= require("./routes/graphics.routes");
const errorHandling= require("./controller/error.controller");

//config
app.set("port", process.env.PORT || 3000);

//Middlewares

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:false}));

// Routes
app.use(graphicsRoutes);
app.use(errorHandling);


module.exports=app;