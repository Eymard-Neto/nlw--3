import express, { response } from "express";

const app = express();

app.get("/users", (req, res) => {
  return res.send("Hello World");
});
app.listen(3333);
