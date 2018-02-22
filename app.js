const express = require("express"); //require express

const app = express(); 

//hello world on homepage
app.get("/", (request, response) => {
  response.send("Hello World");
});

//responding to a POST request
app.post("/", (request, response) => {
  res.send("Received a POST request");
});

//responding to a PUT request
app.put("/user", () => {
  res.send("Received a PUT request at /user");
});

//responding to a DELETE request
app.delete("/user", () => {
  res.send("Received a DELETE request at /user");
});

//bind app to port 3000
app.listen(3000, () => {
  console.log("example app listening on port 3000");
});
