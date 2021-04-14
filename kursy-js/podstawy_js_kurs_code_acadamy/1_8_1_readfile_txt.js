
import fs from 'fs'; //tutaj musial zostac zasotsowany zamiennik zmiaast require bo wywalalo blad

fs.open('C:/JS/repokursyjs/kursy-js/moduly/filasadasde.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});;