/*https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Statements/async_function
https://www.codecademy.com/courses/introduction-to-javascript/lessons/async-await/exercises/review
Słowo kluczowe async służy do pisania funkcji obsługujących akcje asynchroniczne. Otaczamy naszą logikę asynchroniczną wewnątrz
funkcji poprzedzonej słowem kluczowym async. Następnie wywołujemy tę funkcję. 
Funkcja asynchroniczna (poprzedzona slowem async) zawsze zwraca PROMISE. Oznacza to ze ze dla takich funkcji mozemy uzyc wszystkich 
tradycyjnych metod przeznaczonych dla funkcji asynchronicznych takich jak: '.then()', '.catch'*/

async function withAsync(num){
  //tak naprawde slowko async zastapilo wyrazenie return  i deklaracji promisa czyli np tutaj byloby to:  return new Promise((resolve, reject) => {
  if (num === 0){
      return 'zero';
    } else {
      return 'not zero';
    }
} // Funkcja async zawsze zwraca obiekt Promise. Jeśli wewnątrz funkcji wystąpi błąd, obiekt Promise zostanie odrzucony (rejected), jeśli Promise zostanie spełniony (resolve), funkcja async zwróci wartość.

withAsync(100)
  .then((resolveValue) => {
  console.log(` withAsync(100) returned a promise which resolved to: ${resolveValue}.`);
});
