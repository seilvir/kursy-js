//TRY CATCH w funkkcjach asynchronicznych - ogolnie stosuje sie je tak jak zwykly try catch czyli np
async function usingTryCatch() {
  try //try czyli to co program ma sprrobowac 
  {
    let resolveValue = await asyncFunction('thing that will fail');
    let secondValue = await secondAsyncFunction(resolveValue);
  } 
  catch (err) //catch i w zmiennej err przechowywana wartosc errora o dowolnej nazwie zmiennej w ()
  {
    // Catches any errors in the try block
    console.log(err);
  }
 }
 usingTryCatch();
//Pamiętaj, że ponieważ funkcje asynchroniczne zwracają obietnice, nadal możemy używać .catch () natywnej obietnicy z funkcją asynchroniczną
async function usingPromiseCatch() {
  let resolveValue = await asyncFunction('thing that will fail');
}

let rejectedPromise = usingPromiseCatch();
rejectedPromise.catch((rejectValue) => { //tutaj jest uzyty zwykly natywny catch 
console.log(rejectValue);
})
