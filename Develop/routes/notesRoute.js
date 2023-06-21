const notesRoute = require("express").Router();
const { json } = require("express");
const fs = require("fs");
const uuid = require("uuid")

notesRoute.get("./notes",(req, res) => {
    const data = fs.readFileSync("./db/db.json","utf8");
    res.json(JSON.parse(data));
})

notesRoute.post("./notes", (req, res) => {
    const notes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    const newNotes = {
        title: req.body,
        msg: req.body.msg,
        id: uuid.v4(),
    };
    notes.push(newNotes);
    fs.writeFileSync("./db/db.json", JSON.stringify(notes));
    res.json(notes);

})


notesRoute.delete("./notes/:id", (req, res) => {
    const notes = JSON.parse(fs.readFileSync("./db/db.json"));
    const deleteNote = notes.filter((dltNote) => {
        return dltNote.id !== req.params.id});
        fs.writeFileSync("./db/db.json", JSON.stringify(deleteNote));
        res.json(deleteNote);

});



module.exports = notesRoute;