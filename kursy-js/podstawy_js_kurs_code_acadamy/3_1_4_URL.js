//URL Modul
var url = require('url');
// Przeanalizuj adres URL za pomocą metody url.parse (), a zwróci ona obiekt URL z każdą częścią adresu jako właściwości:

var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr, true); //parsuje adres url
console.log(q.host); //returns 'localhost:8080'  - wyciaga hosta (adres glowny) strony
console.log(q.pathname); //returns '/default.htm' - wyciaga adres podstron
console.log(q.search); //returns '?year=2017&month=february' //wyciaga klucze wartosci przy zapytaniu get
var qdata = q.query; //zwraca  object: { year: 2017, month: 'february' }
console.log(qdata.month); //returns 'february'


var adr2 = 'https://www.w3schools.com/nodejs/nodejs_url.asp';
var q2 = url.parse(adr2, true); //parsuje adres url
console.log(q2.host); //returns 'www.w3schools.com'  - wyciaga hosta (adres glowny) strony
console.log(q2.pathname); //returns /nodejs/nodejs_url.asp- wyciaga adres podstron
console.log(q2.search); //tutaj null
var qdata2 = q2.query; //returns an object: { year: 2017, month: 'february' }
console.log(qdata2.month); //returns undefined