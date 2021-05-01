const xhr = new XMLHttpRequest();
const url = 'https://api-to-call.com/endpoint';
apiKey ='tutaj haslo albo token do api keya'
const data=JSON.stringify({id: '200'}); //JSON.stringify () przekonwertuje wartość na ciąg JSON. Konwertując wartość na łańcuch, możemy następnie wysłać dane na serwer.
xhr.responseType ='json'
xhr.onreadystatechange = () => //.onreadystatechange będzie zawierać procedurę obsługi zdarzeń, która zostanie wywołana, gdy stan xhr ulegnie zmianie.
  {
    if (xhr.readyState === XMLHttpRequest.DONE) //j instrukcję warunkową, która sprawdza, czy readyState xhr jest równe XMLHttpRequest.DONE.
    {
      return xhr.response //Właściwość response będzie zawierała dane, które otrzymujemy z żądania POST.
    }
  }
xhr.open('POST',url) //.open () tworzy nowe żądanie, a przekazane argumenty określają, jakiego typu żądanie jest wysyłane i dokąd jest kierowane.
xhr.setRequestHeader('Content-type', 'application/json');
xhr.setRequestHeader('apikey', apiKey); //typ autoryazji i klucz
xhr.send(data)//wywołaj metodę .send () na obiekcie xhr i przekaż dane jako argument. .send () wyśle ​​żądanie do serwera.