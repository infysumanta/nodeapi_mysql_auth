require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/api", (req, res) => {
  res.json({
    success: true,
    message: "This is Rest api working",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
