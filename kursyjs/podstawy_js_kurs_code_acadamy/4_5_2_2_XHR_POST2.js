//HELPER FUNCTIONS  manipulate responseField to render a formatted and appropriate message
const renderResponse = (res) => {
  if(res.errors){
    responseField.innerHTML = "<p>Sorry, couldn't format your URL.</p><p>Try again.</p>"
  } else {
    responseField.innerHTML = `<p>Your shortened url is: </p><p> ${res.shortUrl} </p>`
  }
}

// manipulate responseField to render an unformatted response
const renderRawResponse = (res) => {
  if(res.errors){
    responseField.innerHTML = "<p>Sorry, couldn't format your URL.</p><p>Try again.</p>"
  } else {
    let structuredRes = JSON.stringify(res).replace(/,/g, ", \n")
    structuredRes = `<pre>${structuredRes}</pre>`

    responseField.innerHTML = `${structuredRes}`
  }
}


// -------------------------------------- K O D   Z   C W I C Z E N I A ------------------------------------------
// Information to reach API
const apiKey = '<Your API Key>';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten}); //Uwzględniamy tę informację, ponieważ interfejs API oczekuje, że zobaczy obiekt z kluczowym miejscem docelowym, które ma wartość adresu URL.

  const xhr = new XMLHttpRequest(); //nowy obiekt pod nazwa xhr
  xhr.responseType = 'json'; //typ responsu danych to json
  
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
  		renderResponse(xhr.response);
		}
  }
  xhr.open('POST', url); //metoda zapytania post i drugi parametr to url zadania
  xhr.setRequestHeader('Content-type', 'application/json');  //content typ czyli typ naglowka 
	xhr.setRequestHeader('apikey', apiKey); // klucz
  xhr.send(data);
}


// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);


