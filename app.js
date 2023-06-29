const express = require('express');
const app = express();

app.use(express.static('personal'));

app.listen(8081, () => {
    console.log("hi");
})

app.get('/', (req, res) => {
    res.redirect("personal/index.html")
})