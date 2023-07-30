
const express = require('express')
const myData = require("./data/data")
const fs = require("fs")
const app = express()
const PORT = 5000

const indexFile = fs.readFileSync("views/index.html")

// Static Files
app.use('/css', express.static('css'))
app.use('/assets', express.static('assets'))

// View engine setup
app.set('view engine', 'ejs')

app.get('/', (_, resp) => {
    resp.writeHead(200, { 'Content-type': 'text/html' })
    resp.end(indexFile)
})

app.get('/stpi-it', (_, resp) => {
    resp.render('stpi', { subjectData: myData.subjectsList["it16"] })
})

app.get('/stpi-electrical', (_, resp) => {
    resp.render('stpi', { subjectData: myData.subjectsList["electrical09"] })
})

app.get('/stpi-mechanical', (_, resp) => {
    resp.render('stpi', { subjectData: myData.subjectsList["mechanical19"] })
})

app.get('/stpi-computer', (_, resp) => {
    resp.render('stpi', { subjectData: myData.subjectsList["computer07"] })
})

app.get('/stpi-civil', (_, resp) => {
    resp.render('stpi', { subjectData: myData.subjectsList["civil06"] })
})

app.get('/stpi-automobile', (_, resp) => {
    resp.render('stpi', { subjectData: myData.subjectsList["automobile02"] })
})

app.get('/stpi-chemical', (_, resp) => {
    resp.render('stpi', { subjectData: myData.subjectsList["chemical05"] })
})

app.get('/stpi-electronics', (_, resp) => {
    resp.render('stpi', { subjectData: myData.subjectsList["electronics11"] })
})

app.get('/api/streams', (_, resp) => {
    resp.writeHead(200, { "Content-Type": "application/json" })
    resp.end(JSON.stringify(myData.streams))
})

app.listen(PORT, (err) => {
    if (err) console.log(err)
    console.log("Server listening on PORT", PORT)
})