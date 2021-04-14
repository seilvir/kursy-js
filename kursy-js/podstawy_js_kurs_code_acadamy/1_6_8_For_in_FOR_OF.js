var slownik = {'jeden':'ich','dwa':'ni','trzy':'san','cztery':'yon','piec':'go'}
for ( var slowniczek in slownik) //iteracja po wlasciwosciach czyli po kluczach
{
  console.log('klucz to ',slowniczek, ' a wartosc to ',slownik[slowniczek]) //
}


let tablicanowa=[1,'ich','dwa','piec','dwa','debiec',3,4,5,6]
tablicanowa.dodatkowy_klucz='wartosc_dodatkowego_klucza'
for ( var klucz of tablicanowa) //iteracja po wlasciwosciach czyli po wartosciach  tworzy pętlę wykonującą iterację po obiektach iterowalnych (w tym Array, Map, Set, obiekt arguments itd.),
{
  console.log('Iteruje tylko po wartosciach iterowalnych objektow klucz to ',klucz) //
}