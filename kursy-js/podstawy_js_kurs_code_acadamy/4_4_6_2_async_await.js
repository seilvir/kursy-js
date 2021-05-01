/*
Słowo kluczowe async służy do pisania funkcji obsługujących akcje asynchroniczne. Otaczamy naszą logikę asynchroniczną wewnątrz
funkcji poprzedzonej słowem kluczowym async. Następnie wywołujemy tę funkcję. 
Funkcja asynchroniczna (poprzedzona slowem async) zawsze zwraca PROMISE. Oznacza to ze ze dla takich funkcji mozemy uzyc wszystkich 
tradycyjnych metod przeznaczonych dla funkcji asynchronicznych takich jak: '.then()', '.catch'

---------------------AWAIT-------------------------
samo uzycie async nie wiele robi (poniewaz najczesciej jest uzywane z kluczowym 'await' w tresci funkcji). 'Await' - moze byc uzywane tylko
w funkcji asynchronicznej - await jest operatorem i zwraca rozstrzygnieta wartosc PROMISA (obietnicy).Ponieważ obietnice rozwiązują się w 
nieokreślonym czasie, czekają na zatrzymanie lub przerwy, wykonywanie naszej funkcji asynchronicznej do momentu rozwiązania danej obietnicy.
Jesteśmy w stanie obsłużyć logikę obietnicy w sposób, który czyta się jak kod synchroniczny. */
const funckcjanr = function funckcjanr()
{
  const brainstormDinner = () => {
    return new Promise((resolve, reject) => {
    console.log(`I have to decide what's for dinner...`);
    setTimeout(() => {
      console.log('Should I make salad...?');
      setTimeout(() => {
        console.log('Should I make ramen...?');
        setTimeout(() => {
          console.log('Should I make eggs...?');
          setTimeout(() => {
            console.log('Should I make chicken...?');
            resolve('beans');
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  });
  };

  async function announceDinner() {
    // Write your code below:
    let meal = await brainstormDinner(); //przypisanie zmiennej meal do funkcji brainstormDinner(ktora jest promisem) oraz oznaczenie jej slowem await 
    console.log(`I'm going to make ${meal} for dinner.`);
  }
  announceDinner();
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var prosty_przyklad = () => 
{
  var resolveAfter2Seconds = function() {
    console.log("starting slow promise");
    return new Promise(resolve => {
      setTimeout(function() {
        resolve("slow");
        console.log("wolna obietnica została wykonana");
      }, 2000);
    });
  };
  
  var resolveAfter1Second = function() {
    console.log("starting fast promise");
    return new Promise(resolve => {
      setTimeout(function() {
        resolve("fast");
        console.log("szybka obietnica została wykonana");
      }, 1000);
    });
  };
  
  var sequentialStart = async function() {
    console.log('==START SEKWENCYJNY==');
  
    // 1. Niemalże natychmiast dochodzi do wywołania
    const slow = await resolveAfter2Seconds();
    console.log(slow); // 2. to zostaje wywołanie 2s po 1.
  
    const fast = await resolveAfter1Second();
    console.log(fast); // 3. to zostaje wykonane 3s po 1.
  }
  
  var concurrentStart = async function() {
    console.log('==RÓWNOCZESNY START z await==');
    const slow = resolveAfter2Seconds(); // licznik startuje od razu
    const fast = resolveAfter1Second(); // licznik startuje od razu
  
    // 1. Niemalże natychmiast dochodzi do wywołania
    console.log(await slow); // 2. jest wywołane 2s po 1.
    console.log(await fast); // 3. jest wywołane 2s po 1., natychmiast po 2., podczas gdy szybka jest już wykonana
  }
  
  var concurrentPromise = function() {
    console.log('==RÓWNOCZESNY START z Promise.all==');
    return Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then((messages) => {
      console.log(messages[0]); // wolne
      console.log(messages[1]); // szybkie
    });
  }
  
  var parallel = async function() {
    console.log('==RÓWNOLEGLE z await Promise.all==');
  
    // Równolegle startują dwa zadania i czekamy na zakończenie działania obu
    await Promise.all([
        (async()=>console.log(await resolveAfter2Seconds()))(),
        (async()=>console.log(await resolveAfter1Second()))()
    ]);
  }
  
  // This function does not handle errors. See warning below!
  var parallelPromise = function() {
    console.log('==PARALLEL with Promise.then==');
    resolveAfter2Seconds().then((message)=>console.log(message));
    resolveAfter1Second().then((message)=>console.log(message));
  }
  
  sequentialStart(); // after 2 seconds, logs "slow", then after 1 more second, "fast"
  
  // wait above to finish
  setTimeout(concurrentStart, 4000); // after 2 seconds, logs "slow" and then "fast"
  
  // wait again
  setTimeout(concurrentPromise, 7000); // same as concurrentStart
  
  // wait again
  setTimeout(parallel, 10000); // truly parallel: after 1 second, logs "fast", then after 1 more second, "slow"
  
  // wait again
  setTimeout(parallelPromise, 13000); // same as parallel
}

prosty_przyklad()

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const cityAPI = 'https://api?q=randomCity';
const weatherAPI = 'https://api?q=weather&cityName=';

const city = fetch(cityAPI);
const weather = fetch(weatherAPI+city.name);
console.log(weather.temp + weather.unit);









