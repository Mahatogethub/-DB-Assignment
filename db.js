const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const express= require('express')
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose
  .connect(
    "mongodb+srv://Ranamahato:9XBWNazgyvZ41FGS@rana.1qocv4g.mongodb.net/Db.Assignment",
    { useNewUrlParser: true }
  )

  .then(() => console.log("MongoDB is Connected"))
  .catch((err) => console.log(err));


app.listen(process.env.PORT || 3000, () => {
  console.log("express running on port" + (process.env.PORT || 3000));
});
