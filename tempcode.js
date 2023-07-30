const http = require("http")
const fs = require("fs")
const myData = require("./data/data");
//<%- include ('layouts/navbar.ejs') %> 
const indexFile = fs.readFileSync("index.html")
const stpiFile = fs.readFileSync("stpi.html")

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-type': 'text/html' })
        res.end(indexFile)
    } else if (req.url === '/stpi-it') {
        // fs.readFile('data/stream.json', (err, data) => {
        //     if (err) throw err;
        //     let streamArr = JSON.parse(data);
        //     streamArr.forEach(i => {
        //         console.log([i][0]);      
        //     })
        // })
        res.writeHead(200, { 'Content-type': 'text/html' })
        res.end(stpiFile)
    } else if (req.url === "/api/streams" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "application/json" })
        // res.write(JSON.stringify(myData.streams))
        // res.end()
        res.end(JSON.stringify(myData.streams))
    }

    if (req.url === "/api/stpi-it" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "application/json" })
        res.end(JSON.stringify(myData.subjects["it"]))
    }
})

server.listen(5000, () => {
    console.log("Server Running At 5000")
})

