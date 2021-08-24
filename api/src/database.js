const mongoose= require("mongoose");
const {config}= require("dotenv");
config();

mongoose.connect(process.env.MONGO_URI,
 {useCreateIndex: true, useFindAndModify: true, useNewUrlParser: true, useUnifiedTopology: true})
 .then((db)=> console.log("db connected to db on ", db.connection.host, " port ", db.connection.port))
 .catch((err)=> console.log("error", err))


