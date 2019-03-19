const express = require("express");
const helmet = require("helmet");
const notes = require("./routes/notes");
const mongoose = require("mongoose");

const app = express();

// debug module

// TODO: export this mongoose connect to a more proper place
mongoose
  .connect("mongodb://localhost:27017/notes", { useNewUrlParser: true })
  .then(() => console.log("Connected succesfully to MongoDB"))
  .catch(err => console.log("Could not connect to MongoDB", err));

// it's best to use Helmet early in your middleware stack so that its
// headers are sure to be set
app.use(helmet());
app.use(express.json());

app.use("/api/notes", notes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
