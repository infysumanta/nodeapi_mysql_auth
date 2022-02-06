require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const userRouter = require("./api/users/user.router");

app.use(express.json());

app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
