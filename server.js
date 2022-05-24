const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const path = require("path");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "build")));
app.get("*", (req, res) => {
  res.sendFile("/index.html");
});

app.listen(port, () => console.log(`Server is listening on port : ${port}`));
