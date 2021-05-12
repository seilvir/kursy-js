const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest; //do dopytania - sprawdzenia jak importowac requesty przy uzyciu import
const xhr = new XMLHttpRequest(); //tworzenie nowego obiektu xmlshttprequest pod nazwa xhr
const url = 'https://api-to-call.com/endpoint';
xhr.responseType='json'; //handles response
xhr.onreadystatechange = () =>
   {
      if (xhr.readyState === XMLHttpRequest.DONE)
         {
            console.log("W ifie")
             return xhr.response
         }
        
   };
xhr.open('GET',url); //otworzenie requesta i wyslanie obiektu
xhr.send()
console.log("Koniec")