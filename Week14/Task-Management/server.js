const express = require("express");

const PORT = 3001;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`run on ${PORT}`);
});


app.use("/", express.static(__dirname + "/public"));