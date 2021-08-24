const {Schema,model}= require("mongoose");

const graphicsSchema= new Schema({
    name: String,
    brand: String,
    price: Number,
    image: String,
    memory: String,
    frecuence: String
})

module.exports= model("Graphics", graphicsSchema);