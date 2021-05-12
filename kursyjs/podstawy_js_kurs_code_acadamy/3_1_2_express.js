

const express = require('express')
const port = 8010 //nr portu
const app = express() //zmienna app przyjmuje deklaracje zaimportowanego obiektu express
app.get('/',(request,response) =>{ // '/' oznacza strone glowna  -- dodatkowo tworzona jest funkcja ktora przyjmuje parametry req i response
    response.send("Hello world") //response na stronie czyli hello world
})
app.listen(port) //podanie portu dla localhosta czyli np: localhost:8010

app.get('/inna',(request,response) =>{ // '/' oznacza strone glowna  -- dodatkowo tworzona jest funkcja ktora przyjmuje parametry req i response
    response.send("Oto inna podstrona") //response na stronie czyli hello world
})

app.listen(port) //podanie portu dla localhosta czyli np: localhost:8010