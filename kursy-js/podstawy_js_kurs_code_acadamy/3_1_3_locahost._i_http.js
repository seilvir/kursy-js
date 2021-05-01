

const http = require('http') //import modulu
const port = 8010 //nr hota
const handler = (request,response) => {
    console.log("Hello new user") //consol log widoczny w kosnoli
    ressponse.write('Hello World!'); //response widoczny dla klienta
    response.end ("hello node user") //koniec respona z komunikatem response na stronie localhosta
    response.end();
}
const server = http.createServer(handler) //tworzenie polaczenie
server.listen(port, (err)=> //nasluchiwanie portu , jesli error to wywowalj ten error
{
    if(err) //jesli pojawia sie error wykonaj dzialanie
    {
        console.log("Cos nie dziala")
    }
console.log("Server is running")
}
);