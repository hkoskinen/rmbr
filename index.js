const express = require("express");
const helmet = require("helmet");
const notes = require("./routes/notes");

const app = express();

// it's best to use Helmet early in your middleware stack so that its
// headers are sure to be set
app.use(helmet());
app.use(express.json());

app.use("/api/notes", notes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
