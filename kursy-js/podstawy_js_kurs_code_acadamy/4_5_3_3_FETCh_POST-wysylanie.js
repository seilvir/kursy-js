const fetch = require('node-fetch'); // zalaczenie fetch
fetch('https://api-to-call.com/endpoint', {
  method: 'POST',//Ten  argument określa, że ​​to żądanie jest żądaniem POST 
  body: JSON.stringify({id: "200"}) //Ten  argument  jakie informacje zostaną przesłane do interfejsu API.
  headers: { //ustawienia headerow
    'Content-type': 'application/json',
    'apikey': apiKey
  },
  body: data
}).then(response => { //sprawdzanie responsu
  if(response.ok){
	  return response.json();  
  }
	throw new Error('Request failed!'); //jesli wyrzucanie errora
}, networkError => {
  console.log(networkError.message); //zapisanie do consol loga bledu
}).then(jsonResponse => {
  console.log(jsonResponse); //zapisanie w drugiej funkcji then responsu z API
})