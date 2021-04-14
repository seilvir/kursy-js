console.log('First message! display(1)');

setTimeout(() => { //tutaj deklarowana jest anonimowa funkcja bez podawania nazwy w nastepujacysposob: () = {} 
   console.log('This is second  message with first settimeout nr 1, display(4)');
}, 11);

setTimeout(() => {
   console.log('This is third  message with first settimeout nr 2, display (3)');
}, 10);

console.log('This is 4th first display(2)')