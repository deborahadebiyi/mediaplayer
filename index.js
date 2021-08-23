const express = require("express");
const port = 3005;
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

//middleware
app.use(express.json());

//database connection
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

mongoose.connection.on("connected", ()=>{
    console.log("Successfully connected to mongo database")
})

//endpoints
//GET ALL SONGS
app.get("/songs", (req,res)=>{
    console.log("List of songs");
})
//GET A SONG BY ID
app.get("/song/:id", (req,res)=>{
    console.log("Returns a specific song");
})
//GET ALL PLAYLISTS
app.get("/playlists", (req,res)=>{
    console.log("Returns a list of all playlists");
})
//GET A PLAYLIST BY ID
app.get("/playlist/:id", (req,res)=>{
    console.log("Returns a specific playlist")
})



app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
});