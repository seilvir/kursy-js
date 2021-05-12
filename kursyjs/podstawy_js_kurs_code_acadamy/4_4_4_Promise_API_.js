/*Klasa Promise posiada 4 metody statyczne, które możemy wykorzystać w zależności od naszych potrzeb, 
bez konieczności tworzenia nowego obiektu. Najbardziej użyteczną z nich jest metoda all(), 
umożliwiająca uruchomienie wielu obietnic równolegle (eng. parallel)
1) Promise.all()  przyjmuje jako argument tablicę obietnic i zwraca pojedynczą obietnicę. Ta pojedyncza obietnica zostanie spełniona na jeden z dwóch sposobów:
2) Promise.resolve()
3) Promise.reject()
4) Promise.race() - jest podobna do all z tym ze wykona sie tylka ta obietnica ktora wykona sie jako pierwsza 
*/
 //zwraca jeden argument - ale mozna to obejsc tworzac np tablice

 //Promise.all - w skrocie to tablica zawierajaca Promisy gdzie kazdy promis w tej tablicy wykonuje sie asynchronicznie
Promise.all(
    [
        new Promise((resolve,reject) => setTimeout(() => resolve(1), 5000)),
        new Promise((resolve,reject) => setTimeout(() => resolve(2), 3000)),
        new Promise((resolve,reject) => setTimeout(() => resolve(3), 2000)),
        new Promise((resolve,reject) => setTimeout(() => resolve(4), 1000))
    ]).then(resposnyjakies =>
        {
            console.log(resposnyjakies);
        }
    );

const names =["apple","microsoft"];
const request  = names.map(name => axios.get(`https://api.github/com${name}`));
Promise.all(request)
        .then(data => data.map(user => user.data))
        .then(users => users.forEach(user => console.log(user.login)));


const promisresolve =  Promise.resolve("returnowanie resolve");
console.log(promisresolve);
/*
function fetchuser(id)
    {
        const user =localStorage.getItem(`user-${id}`);
        return user
        ? Promise.resolve(user)
        : User.find(user => {
            localStorage.setItem(`user-${id}`,user);
            return user;
        });
    }
fetchuser('admin').then()
*/

const promisreject = Promise.reject("REJECTOWANIE")
console.log(promisreject);