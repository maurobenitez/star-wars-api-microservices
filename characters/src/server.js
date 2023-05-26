const express = require("express");
const morgan = require("morgan");

const server = express();

server.use(express.json());
server.use(morgan("dev"));
server.use(require("./routes"));

server.use(async (err, req, res, next)=>{
    res.status(err.statusCode).send({
        error: true,
        message: err.message,
    });
});

server.use("*", (req, res)=>{
    res.status(404).send("Not found");
});

module.exports = server;
