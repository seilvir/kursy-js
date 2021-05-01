//Oprócz domyślnego eksportu, nazwane eksporty pozwalają nam eksportować dane przy użyciu zmiennych.
//Zobaczmy, jak to działa. W menu.js z pewnością nadamy każdemu fragmentowi danych odrębną nazwę zmiennej:
let availableAirplanes = [{
    name: 'AeroJet',
    fuelCapacity: 800,
    availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
   }, 
   {name: 'SkyJet',
    fuelCapacity: 500,
    availableStaff: ['pilots', 'flightAttendants']
   }];
   
   let flightRequirements = {
     requiredStaff: 4,
   };
   
   function meetsStaffRequirements(availableStaff, requiredStaff) {
     if (availableStaff.length >= requiredStaff) {
       return true;
     } else {
       return false;
     }
   };
   let jakastamzmiennazeksportu ='przykladowy string z eksportu'
   let inna_zmienna ='inna zmieniona nazwa '

   const inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344
  };
  
  const checkInventory = (order) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let inStock = order.every(item => inventory[item[0]] >= item[1]);
        if (inStock) {
          resolve(`Thank you. Your order was successful.`);
        } else {
          reject(`We're sorry. Your order could not be completed because some items are sold out.`);
        }
      }, 1000);
    })
  };
   export {availableAirplanes, flightRequirements, meetsStaffRequirements,jakastamzmiennazeksportu, inna_zmienna as inna_zmieniona_nazwa,checkInventory };// ekport kilku obiektow
   //mozna tez uzyc aliasu 'as' dla nazwy esportowanego obiektu