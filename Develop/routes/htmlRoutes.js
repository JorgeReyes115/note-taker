
const path = require("path");
const htmlRoutes = require("express").Router();

htmlRoutes.get("/", (req, res)=> {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

htmlRoutes.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});                                   



module.exports = htmlRoutes;