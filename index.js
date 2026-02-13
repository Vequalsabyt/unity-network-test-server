const express = require("express");
const app = express();

app.use(express.json());

let gameState = {
  activePlayer: "Eagle" // switch manually for testing
};


app.get("/state", (req, res) => {
  res.json(gameState);
});

app.get("/ping", (req, res) => {
  res.send("Server is alive!");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
