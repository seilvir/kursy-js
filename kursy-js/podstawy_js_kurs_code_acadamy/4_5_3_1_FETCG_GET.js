//fetch GET https://www.codecademy.com/courses/introduction-to-javascript/lessons/requests-ii/exercises/fetch-get-requests-ii
const fetch = require('node-fetch'); // zalaczenie fetch

fetch('https://api-to-call.com/endpoint') //podanie adresu url jako parametru funkcji fetch
// Information to reach API - w zasadzie to samo co wczesniej tylko z podpieciem document.
const url = 'https://api.datamuse.com/words'
const queryParams ='?sl='
// Selects page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
const wordQuery =inputField.value;
const endpoint = `${url}${queryParams}${wordQuery}`;
fetch (endpoint,{cache: 'no-cache'}).then(response => {
if (response.ok)
{
 return response.json()
}
throw new Error('Request failed!');  
},networkError =>{console.log(networkError.message)}
).then(jsonResponse => {
    renderResponse(jsonResponse);
  }
);
}