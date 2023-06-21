const express = require("express");
const htmlRoutes = require("./Develop/routes/htmlRoutes");
const notesRoute = require("./Develop/routes/notesRoute");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.use("/", htmlRoutes);
app.use("/api", notesRoute);

app.listen(PORT, ()=>
console.log(`server available at localhost${PORT}` ));

