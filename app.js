const express = require("express"); //require express

const app = express(); 

//hello world on homepage
app.get("/", (request, response) => {
  response.send("Hello World");
});


app.post("/", (request, response) => {
  res.send("Received a POST request");
});

app.put("/user", () => {
  res.send("Received a PUT request at /user");
});

app.delete("/user", () => {
  res.send("Received a DELETE request at /user");
});

app.listen(3000, () => {
  console.log("example app listening on port 3000");
});
