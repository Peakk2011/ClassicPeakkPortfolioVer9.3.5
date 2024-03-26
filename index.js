const express = require("express");
const app = express();
const path = require("path")

app.use(express.static('frontend'))
app.use((req,res,next) => {
    console.log("Web is on http://localhost:1080/")
    next();
})

app.get("/",(req,res) => {
res.sendFile(path.join(__dirname,"frontend","index.html"))


})

app.get("/About/Chaninyut",(req,res) => {
res.sendFile(path.join(__dirname,"frontend","About.html"))    
})

app.get("*",(req,res) => {
    res.sendFile(path.join(__dirname,"frontend","Error","Error.html"))
})

app.listen(1080 || process.env.PORT)
