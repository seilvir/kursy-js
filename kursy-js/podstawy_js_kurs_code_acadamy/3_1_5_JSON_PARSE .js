const json = '{"result":true, "count":42}'; //json data
const obj = JSON.parse(json); //przypisanie do zmiennej obj danych json

console.log(obj.count);
// expected output: 42

console.log(obj.result);
// expected output: true