//przykladowe zapytanie GET z parametrami oddzielonymi znakiem ? takze dodajc kolejny pare klucz wartosc &
//'https://api.datamuse.com/words?key=value&anotherKey=anotherValue'

//dodatkowe funkcje pomocnicze nr 1 
// Formats response to look presentable on webpage
const renderResponse = (res) => {
   // handles if res is falsey
   if(!res){
     console.log(res.status)
   }
   // in case res comes back as a blank array
   if(!res.length){
     responseField.innerHTML = "<p>Try again!</p><p>There were no suggestions found!</p>"
     return
   }
 
   // creating an array to contain the HTML strings
   let wordList = []
   // looping through the response and maxxing out at 10
   for(let i = 0; i < Math.min(res.length, 10); i++){
     // creating a list of words
     wordList.push(`<li>${res[i].word}</li>`)
   }
   // joins the array of HTML strings into one string
   wordList = wordList.join("")
 
   // manipulates responseField to render the modified response
   responseField.innerHTML = `<p>You might be interested in:</p><ol>${wordList}</ol>`
   return
 }
 
 // Renders response before it is modified
 const renderRawResponse = (res) => {
   // taking the first 10 words from res
   let trimmedResponse = res.slice(0, 10)
   //manipulates responseField to render the unformatted response
   responseField.innerHTML = `<text>${JSON.stringify(trimmedResponse)}</text>`
 }
 
 // Renders the JSON that was returned when the Promise from fetch resolves.
 const renderJsonResponse = (res) => {
   // creating an empty object to store the JSON in key-value pairs
   let rawJson = {}
   for(let key in response){
     rawJson[key] = response[key]
   }
   // converting JSON into a string and adding line breaks to make it easier to read
   rawJson = JSON.stringify(rawJson).replace(/,/g, ", \n")
   // manipulates responseField to show the returned JSON.
   responseField.innerHTML = `<pre>${rawJson}</pre>`
 }

 
/*----------------------------------------------------------------------------------------------------------------------------------
 kod nr 2  ktory byl w cwiczenia - ogolnie polega po prostu na utworzeniu zapytania ktore ma 2 argumenty kluczy i warotsci laczone znakiem &
-----------------------------------------------------------------------------------------------------------------------------------*/

const url = 'https://api.datamuse.com/words?'; //url z ktorym sie laczymy
const queryParams = 'rel_rhy='; //zmienna do obslugi parametrow zapytania

// Selecting page elements
const inputField = document.querySelector('#input');//pobiera to co zostanie wyslane w formularzu
const submit = document.querySelector('#submit'); //przycisk wyslij
const responseField = document.querySelector('#responseField'); //zwraca to co bedzie jako elemnt zwrotny 

// AJAX function
const getSuggestions = () => {
  const wordQuery = inputField.value;
  const endpoint = `${url}${queryParams}${wordQuery}`; //zmienna ktora jest zapytaniem wysylanym przez request
  
  const xhr = new XMLHttpRequest(); //tworzenie obiektyu do zapytan
  xhr.responseType = 'json'; //wskazanie na tym obiektu - oznacza ze dane z responsu beda w formacie JSON

  xhr.onreadystatechange = () => { //anonimowa funkcja ktora obsluguje zdarzenie odpowiedzi requesta 
    if (xhr.readyState === XMLHttpRequest.DONE) { //warunek ze jesli zapytanie zostalo przeslane/zakonczone
      renderResponse(xhr.response); //to zostaje obsluzony respone 
    }
  }
  
  xhr.open('GET', endpoint); //funkcja open pobiera  element 'GET' oraz wyniki zmiennej ednpoint (czyli url)
  xhr.send(); //wyslanie zapytanie do serwera 
}

// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
}

submit.addEventListener('click', displaySuggestions);
const url = 'https://api.datamuse.com/words?';
const queryParams = 'rel_jjb=';
const additionalParams  = '&topics=';
// Selecting page elements
const inputField = document.querySelector('#input');
const topicField = document.querySelector('#topic');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
  const wordQuery = inputField.value;
  const topicQuery = topicField.value;
  const endpoint = `${url}${queryParams}${wordQuery}${additionalParams}${topicQuery}`;
  
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      renderResponse(xhr.response);
    }
  }
  
  xhr.open('GET', endpoint);
  xhr.send();
}

// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
}

submit.addEventListener('click', displaySuggestions);