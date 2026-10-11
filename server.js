import express from "express";

const server = express();
server.use(express.static("website/client"));


server.listen(8800);