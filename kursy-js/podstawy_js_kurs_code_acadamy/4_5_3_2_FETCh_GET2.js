//fetch GET https://www.codecademy.com/courses/introduction-to-javascript/lessons/requests-ii/exercises/fetch-get-requests-ii
const fetch = require('node-fetch'); // zalaczenie fetch

fetch('https://api-to-call.com/endpoint') //podanie adresu url jako parametru funkcji fetch
.then(response => { //Połącz metodę .then () na końcu funkcji fetch () i przekaż jej funkcję strzałki wywołania zwrotnego sukcesu jako jej pierwszy argument. Funkcja wywołania zwrotnego sukcesu przyjmuje jeden parametr - odpowiedź.   .then () zostanie uruchomiony dopiero po rozwiązaniu obietnicy statusu funkcji fetch ().
  if (response.ok) { //W funkcji wywołania zwrotnego odpowiedzi sprawdź właściwość 'response.ok' odpowiedzi w instrukcji warunkowej. 
    return response.json(); //W bloku kodu instrukcji warunkowej zwróć response.json ().     Powodem, dla którego testujemy właściwość ok obiektu odpowiedzi, jest to, że będzie to wartość logiczna. Jeśli nie było błędów, response.ok będzie prawdziwe, a Twój kod zwróci response.json ().
  }
  else
  {
  throw new Error('Request failed!'); // wyrzuca error jesli kod zgłosi  błąd, gdy parametr response.ok jest fałszywy.
  }
}, 
networkError => {//Dodaj drugi argument do .then (), będzie to funkcja strzałkowa, która obsłuży nasze awarie. Oddziel pierwszą funkcję zwrotną od drugiej przecinkiem.
  console.log(networkError.message); // Druga funkcja zwrotna przyjmuje pojedynczy parametr, networkError.
  }
)

/* Dodanie kolejnej metody .then () na końcu pierwszej metody .then ().
Przekaż nowej metodzie .then () funkcję zwrotną, która jako parametr przyjmuje jsonResponse i zwraca jsonResponse.
Drugie pomyślne wywołanie zwrotne .then () nie zostanie uruchomione, dopóki poprzednia metoda .then () nie zakończy działania. Nie będzie również działać, jeśli wcześniej został zgłoszony błąd.*/
.then(jsonResponse => 
  {
  return jsonResponse;
  }
);