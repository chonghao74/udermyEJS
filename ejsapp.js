const express = require("express");
const app = express();
const path = require("path");

//middleware
app.use(express.static("public"));
//調整使用 ejs 不需要副檔名
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    // res.render("index.ejs");
    let ejs_3 = "<h1>EJS3</h1>";
    let ejs_2 = [
        { name: "Java", rating: 10 },
        { name: "Kotlin", rating: 10 },
        { name: "Rust", rating: 10 },
        { name: "JS", rating: 10 }
    ];
    res.render("index", { ejs_2, ejs_3 });
});

app.get("/language", (req, res) => {
    let { count } = req.params;
    let countN = Number(count);
    let code_language = [
        { name: "Java", rating: 10 },
        { name: "Kotlin", rating: 10 },
        { name: "Rust", rating: 10 },
        { name: "JS", rating: 10 }
    ]
    res.render("index", { countData: countN, code_language });
});

app.get("/person/:who", (req, res) => {
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