const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");
const gameRounds = require("./routes/game.round");
const app = express();

const PORT = 8000;
//middleware
app.use(express.urlencoded());
app.use(bodyParser.json());
app.use(morgan("dev"));

//route
app.use("/api/v1/game", gameRounds);

app.listen(PORT, () => {
  console.log(`Server Express running at http://localhost:${PORT}`);
});
