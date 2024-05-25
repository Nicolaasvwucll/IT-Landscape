const express = require("express");

// Express app maken
const app = express();

// Luisteren naar de root van de server
app.get("/", (req, res) => {
  res.send("Hello IT Landscape");
});

// Server starten op poort 3000
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});