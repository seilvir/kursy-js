let getRandomNumberArrow1 = () => {
  return Math.random();
}
console.log(getRandomNumberArrow1()); //0.22574396180293177



//pominięte zostało tutaj słowo kluczowe function, pozostały puste nawiasy w których mogą być wprowadzane parametry oraz nawiasy klamrowe, w których zawarte jest ciałko funkcji.
let getRandomNumberArrow1 = () => {
  return Math.random();
}
console.log(getRandomNumberArrow1()); //0.22574396180293177


//w poniższym przykładzie zostały również pominięte nawiasy klamrowe oraz słowo return. Na taki zapis możesz sobie pozwolić w przypadku funkcji zwracających wartość i jeżeli w ciele funkcji znajduje się tylko 1 instrukcja.
let getRandomNumberArrow2 = () => Math.random();
console.log(getRandomNumberArrow2()); //0.01684335901442857


//W ponizszym przykładzie jako parametr został przekazany x. Podobnie jak poprzednio, dlatego że funkcja zwraca wartość i zawiera tylko 1 instrukcję zostały pomięte nawiasy klamrowe oraz słowo return.
let getNumber = (x) => x;
console.log(getNumber(2)); //2

//Jeżeli funkcja przyjmuje tylko 1 parametr mogą zostać pominięte nawiasy, tak jak to widać na przykładzie ponizej.
let multiplyNumber = x => x * x;
console.log(multiplyNumber(2)); //4

//W przypadku, gdy funkcja ma 2 lub więcej parametrów muszę one być w nawiasach.
let addNumbers = (x, y) => x + y;
console.log(addNumbers(2, 4)); //6