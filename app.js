const express = require("express")

const app = express()

app.get("/", function(req, res){
  res.send("<h1>main page EXPRESS</h1>")
})

app.get("/about", function(req, res){
  res.send("<h1>About sait</h1>")
})

app.get("/contact", function(req, res) {
  res.send("<h1>Contacts</h1>")
})

app.listen(3001)


