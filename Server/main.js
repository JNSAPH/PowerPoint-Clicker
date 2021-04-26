const WebSocket = require('ws');
const express = require('express')
const cors = require('cors')
const port = 1212

const app = express()
app.use(cors())

// Initialized Socket Server
const wss = new WebSocket.Server({
    port: 1213,
    perMessageDeflate: {
        zlibDeflateOptions: {
            // See zlib defaults.
            chunkSize: 1024,
            memLevel: 7,
            level: 3
        },
        zlibInflateOptions: {
            chunkSize: 10 * 1024
        },
        // Other options settable:
        clientNoContextTakeover: true, // Defaults to negotiated value.
        serverNoContextTakeover: true, // Defaults to negotiated value.
        serverMaxWindowBits: 10, // Defaults to negotiated value.
        // Below options specified as default values.
        concurrencyLimit: 10, // Limits zlib concurrency for perf.
        threshold: 1024 // Size (in bytes) below which messages
        // should not be compressed.
    }
});

var connections = [];

// On Connection
wss.on('connection', function connection(ws) {
    // Keep track of Session
    ws.id = Math.floor(Math.random()*90000) + 10000;
    connections[ws.id] = ws;

    // Log and send Sessions
    console.log("New Connection with sessionID: " + ws.id);
    ws.send(`You're connected to the Server! \nSession ID: ${ws.id}. Give the SessionID to the Presenters`);
});


app.get('/previous/:sessionID', (req, res) => {
    console.log("Previous Slide");

    // Send Message
    try {
        connections[req.params.sessionID].send("back")
    } catch (error) {
        res.status(400).send({code: 400, message: "Missing sessionID"})
    }

    res.status(200).send({ code: 200, message: "Done." })
})

app.get('/next/:sessionID', (req, res) => {
    console.log("Next Slide");

    // Send Message
    try {
        connections[req.params.sessionID].send("next")
    } catch (error) {
        res.status(400).send({code: 400, message: "Missing sessionID"})
    }

    res.status(200).send({ code: 200, message: "Done." })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})