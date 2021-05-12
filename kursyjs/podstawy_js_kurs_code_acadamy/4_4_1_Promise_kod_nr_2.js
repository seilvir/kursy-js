var inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344
  };
  
  
  var myExecutor = (resolve, reject) => //deklaracja zmiennej z nazwa funkcji ktora bedzie obslugiwana przez promis (argumenty resolve i reject sa obligatoryjne [nie sa deklarowane przez programiste])
  {
      //blok instrukcji warunek dla resolve jesli true i recejct jesli false
      if (inventory.sunglasses > 0) {
          resolve('Sunglasses order processed.');
      } else {
          reject('That item is sold out.');
      }
  };
  //utworzenie nowej funkcji ktora bedzie zwracala wynik promise
  var orderSunglasses = () =>  {
      return new Promise(myExecutor); //deklaracja Promise czyli slowko kluczowe new Promis(obslugiwana_funkcja)
  };
  
  var orderPromise = orderSunglasses();
  
  console.log(orderPromise);   