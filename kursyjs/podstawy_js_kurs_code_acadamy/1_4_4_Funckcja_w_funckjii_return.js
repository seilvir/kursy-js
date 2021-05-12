function multiplyByNineFifths(number) {
    return number * (9/5);
  };
   
  function getFahrenheit(celsius) {
    return multiplyByNineFifths(celsius) + 32;
  };
   
  getFahrenheit(15); // Returns 59

  function monitorCount(rows, columns) {
    let wynik=rows * columns
    return wynik;
  }
  
  function costOfMonitors (rows,columns)
  {
    return (monitorCount(rows, columns)*200); //wykonanie funcji a nastepnie zwraca wynik i mnozy razy 200
  }
  
  const totalCost= costOfMonitors(5,4)
  console.log(totalCost)