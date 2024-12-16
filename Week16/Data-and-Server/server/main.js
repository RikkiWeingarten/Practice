const express = require("express");
const app = express();
const cors = require("cors");

const PORT = 3001
app.use(cors());
app.use(express.json());

app.get("/api/hello", (req, res) => {
    res.send("Hello From Express")
});

app.post("/api/world", (req, res) => {
    res.send({message: `I received your POST request. This is what you sent me: ${req.body.message}`})
    console.log({post: "Hi from client"})
})
app.listen(PORT, ()=> {
    console.log("listening on port", PORT)
})
