/*Chaining Multiple Promises - polega na laczeniu po sobie kolejnych wielu operacji,
 których wykonanie zależy od siebie lub które muszą zostać wykonane w określonej kolejności. (czyli cos na zasadzie jesli A sie wykonalo to wykonaj B a nastepnie C)
 

 Wywołujemy funkcję firstPromiseFunction (), która zwraca obietnicę.
Wywołujemy .then () z anonimową funkcją jako procedura obsługi sukcesu.
W module obsługi sukcesu zwracamy nową obietnicę - wynik wywołania drugiej funkcji, secondPromiseFunction () z rozstrzygniętą wartością pierwszej obietnicy.
Wywołujemy drugą .then (), aby obsłużyć logikę rozliczenia drugiej obietnicy.
Wewnątrz tego pliku .then () mamy procedurę obsługi sukcesu, która zapisze rozwiązaną wartość drugiej obietnicy w konsoli.
Aby nasz łańcuch działał poprawnie, musieliśmy zwrócić obietnicę secondPromiseFunction (firstResolveVal). Zapewniło to, 
że wartość zwrotu pierwszej obietnicy .then () była naszą drugą obietnicą, a nie domyślnym return nowej obietnicy o tej samej ustalonej wartości co początkowa.

firstPromiseFunction()
.then((firstResolveVal) => 
    {
    return secondPromiseFunction(firstResolveVal);
    })
.then((secondResolveVal) => 
    {
    console.log(secondResolveVal);
    });
 */
const promisstaala = new Promise((resolve,reject) => 
    {
        resolve(5) ;
    });
promisstaala.then(result => result*2)
            .then(result => console.log(result))
            .then(result => console.log('ihc'))
            .then(result => console.log(result))//dlaczego tutaj result jest undefine ?
            .then(result => console.log('san'))
            .catch(reason => console.log(reason))
            .finally(()=>console.log("Finished")) //wywoala sie niezaleznie od tego co bedzie wczesniej - czyli wywola sie zawsze dodatkowo

