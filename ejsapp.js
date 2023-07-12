const express = require("express");
const app = express();
const path = require("path");

//middleware
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/:who", (req, res) => {
    let { who } = req.params;

    let code_language = [
        { name: "Java", rating: 10 },
        { name: "Kotlin", rating: 10 },
        { name: "Rust", rating: 10 },
        { name: "JS", rating: 10 }
    ]

    res.render("someone.ejs", { who, code_language });
});

//routing for all
app.get("/*", (req, res) => {
    res.send("404 Page");
});

app.listen(3040, () => {
    console.log("Success EJS Server ")
});