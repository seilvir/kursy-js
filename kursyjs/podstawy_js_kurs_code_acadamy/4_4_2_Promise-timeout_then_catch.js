//Funckja setTimeout(zwracana_funkcja,czas_w_milisekundach)
var zmienna = 110;
console.log("Czy cos sie dzieje ?")
const jakastamfunkcja_egzekucji_promise = function funkcja() 
{
    if (zmienna == 10)
        {
           console.log("Zmienna ma wartosc 10 ",zmienna) 
        }
    else
    {
        console.log("Zmienna ma wartosc 10 ",zmienna)
    }
    return "Return z funkcji jakastamfunkcja_egekucji_romise"   
}

console.log("tutaj powinein byc return z funkcji jakastamfunkcja_egzekucji_promise")//tutaj tworzona jest funkcja ktora bedzie egzekwowana
setTimeout(jakastamfunkcja_egzekucji_promise,2000) //czyli w zasadzie tutaj nastepuje egzekujca funkcji po czasie wskazanym w milisekundach

function usingSTO()
{
  console.log("String")
}
setTimeout(usingSTO,1000)


/*
Za co najmniej dwie sekundy zostanie wywołana delayedHello (). Ale dlaczego jest to „co najmniej” dwie sekundy, a nie dokładnie dwie sekundy?
To opóźnienie jest wykonywane asynchronicznie - reszta naszego programu nie przestanie działać podczas opóźnienia. Asynchroniczny JavaScript używa czegoś, 
co nazywa się pętlą zdarzeń. Po dwóch sekundach do wiersza kodu oczekującego na uruchomienie zostanie dodana funkcja jakastamfunkcja_egzekucji_promise().
 Zanim będzie można go uruchomić, zostanie uruchomiony dowolny kod synchroniczny z programu. Następnie zostanie uruchomiony dowolny kod w wierszu znajdujący się przed nim.
  Oznacza to, że może minąć więcej niż dwie sekundy zanim delayedHello () zostanie faktycznie wykonana.
*/
// przykladowy zapisy funkcji strzalkowej 'let getRandomNumberArrow1 = () => {}' zamiast 'let getRandomNumber = function() {}'
const promise = new Promise((resolve, reject) => { //tutaj new Promise((resolve,reject)) w zasadzie sluzy  jako zamiennik = ()
  const res = true;
  // An asynchronous operation.
  if (res) {
    const jakasfunkcjadlareturna= () =>{
        var a=5;
        var b = 6;
        var c=a+b;
        var d =`Zwrocony tekst z lini 43 a wynik 5+6 = ${c} - RESOLVED !!!`
        return d;
      }
    resolve(jakasfunkcjadlareturna()); //resolve przyjmuje parametr ( w tym tez return z funkcji)
  }
  else {
    reject(Error('Error')); // tak samo jak reject
  }
});
promise.then((res) => console.log(res), (err) => alert(err));
/*
Obiekty Promise są dostarczane z trafnie nazwaną metodą .then (). Pozwala nam powiedzieć: „Mam obietnicę, kiedy się ułoży, oto co chcę, aby się wydarzyło
Jeśli nasza obietnica się spełni, oznacza to, że mamy czyste naczynia i je odstawimy. .then () jest funkcją wyższego rzędu - jako argumenty przyjmuje dwie funkcje zwrotne. 
We refer to these callbacks as handlers. When the promise settles, the appropriate handler will be invoked with that settled value.
The first handler, sometimes called onFulfilled, is a success handler, and it should contain the logic for the promise resolving.
The second handler, sometimes called onRejected, is a failure handler, and it should contain the logic for the promise rejecting.
Możemy wywołać .then () z jednym, obydwoma lub żadnym z handlerów!
*/
let prom = new Promise((resolve, reject) => { //deklaracja zmiennej prom zawierajaca obiekt promist
  let num = Math.random();
  if (num < .5 ){
    resolve('Yay!');
  } else {
    reject('Ohhh noooo!');
  }
});
 
const handleSuccess = (resolvedValue) => { //deklaracja success handlera
  console.log(resolvedValue);
};
 
const handleFailure = (rejectionReason) => { // deklaracja error failure handlera
  console.log(rejectionReason);
};
//prom.then(handleSuccess) // mozna uzyc takiego zapisu podajac tylko to co promise ma zrobic w przypadku spelnienia warunku
prom.then(handleSuccess, handleFailure); //deklaracja prom. then i podanie co jest sukces i reject

//IDK - jest to funckja ktora zawiera promis i funkcja zwraca to jako promis
const returnPromiseFunction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(( ) => {resolve('I resolved!')}, 1000);
  });
};
const prom2 = returnPromiseFunction();
//-------------------------------------------------------------------------------------------------------------------
/*          catch z promise 
Funkcja .catch () przyjmuje tylko jeden argument, onRejected. W przypadku odrzucenia obietnicy, ta procedura
 obsługi niepowodzenia zostanie wywołana z przyczyną odrzucenia. Użycie .catch () daje to samo, co użycie .then () tylko z obsługą błędów */
 let promis_z_catch = new Promise((resolve, reject) => { //deklaracja zmiennej prom zawierajaca obiekt promist
  let numer = Math.random();
  if (numer < .5 ){
    resolve('Yay! dobra liczba nei wylapuje catchem');
  } else {
    reject('Ohhh noooo! zla liczba catch wylapuje');
  }
});

//ogolnie wyglada to tak promis.then(resolve).catch(reject)
promis_z_catch
    .then((resolvedValuedlacatch) => 
      {
        console.log("Wypisuje resolvedvalue_bez_catch",resolvedValuedlacatch)
      })
    .catch((rejectionReason_bez_catch) => 
    {
      console.log("Wypisuje poowd rejecton wraz z wartoscia catch",rejectionReason_bez_catch)
    });