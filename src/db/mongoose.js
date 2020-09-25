//Imports
const mongoose = require("mongoose");

//DB connection
const URI = process.env.MONGODB_URI
  ? process.env.MONGODB_URI
  : "mongodb+srv://admin:TravellersPass@cluster0.edtym.mongodb.net/travellersBlog?retryWrites=true&w=majority";

mongoose.connect(URI, {
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//DB responses
const connection = mongoose.connection;

connection.once("open", () => console.log("DB is connected"));
