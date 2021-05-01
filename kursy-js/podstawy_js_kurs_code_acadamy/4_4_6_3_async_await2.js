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

// ponizej funkcja asynchroniczna 
// używamy await, aby zatrzymać nasze wykonanie do czasu rozwiązania Promisa funkcji brainstormDinner ()  przypisać jego rozstrzygniętą wartość do zmiennej meal.operator await zwraca rozstrzygniętą wartość obietnicy
async function announceDinner() {
  let meal = await brainstormDinner(); //zwraca rozstrzygnieta wartosc PROMISE - tutaj rozstrzygnieta wartoscia bedzie kod linii 12 - resolve('beans')
  //gdyby zabraklo await nie zostalaby przekazana wartosc rozstrzygniecia Promisa (czyli resolve('beans'))
  console.log(`I'm going to make ${meal} for dinner.`); //przejaze rozwiazanie promise
}

announceDinner();


// KOD FUNKCJI NR Z KOLEJNEJ LEKCJI 
let myPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Yay, I resolved!')
    }, 1000);
  });
}
async function noAwait() {
  let value = myPromise(); //tutaj dla przykladu jest brak promisa co skutkuje bledem takim Funkcja noAwait () rejestruje Promise {<pending>} w konsoli. Bez słowa kluczowego await wykonywanie funkcji nie zostało wstrzymane. Consol.log () w następnym wierszu została wykonana przed spełnieniem obietnicy.
  console.log(value);
 }
  
 async function yesAwait() {
  let value = await myPromise(); // tutaj uzyto operatora await przez funkcja zwraca sie poprawnie poniewaz zostal zwrocony wyniki Promisa dla funkjci myPromise()
  console.log(value);
 }
  
 noAwait(); // Prints: Promise { <pending> }
 yesAwait(); // Prints: Yay, I resolved!








