const now = new Date()
const date = new Date (1995,11,17)
const teraz = now.getTime()
const oneDay = 24 * 60 * 60 * 1000;
console.log("Teraz - now.getTime to ",teraz)

const data_jakas =date.getTime()
console.log("Date - now.getTime to ",data_jakas)
const odejmowanie_dat = teraz-data_jakas
console.log("Odejmowanie date ",odejmowanie_dat)
const result = Math.round(Math.abs((now.getTime() - date.getTime()) / oneDay));
//const result = Math.round(Math.abs((now.getTime() - date.getTime()) / oneDay));
//console.log(`Date calculation: ${now.getTime()} - ${date.getTime()} = ${result}`);
const result_ile_lat = result/365
console.log(result)
console.log(result_ile_lat)



const numberOnPage =9270
console.log(
  `Number days on exit on the page was: ${numberOnPage} and expected from calculation: ${result} `
);
if (numberOnPage >= result - 1 && numberOnPage <= result + 1)
{
    console.log("Zakres bledu prawidlowy dla number page",numberOnPage," i result ",result,'a roznica to ',result-numberOnPage)
}
else
{
    console.log("Zakres nierprawidlowy",'a roznica to result-numberOnPage ',result-numberOnPage)
}