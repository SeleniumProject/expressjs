var express = require("express");
var app = express();
app.get("/", (req,res) => {
    res.send("hello world");
});

app.listen(4000);

app.get('/get-user-details', (req, res) =>{
    const userObj ={
        id:123,
        name:"Ramesh",
        salary:25400.234,
        department:"Quality",
        updatedAt :new Date()
    }
    res.send(userObj);
});