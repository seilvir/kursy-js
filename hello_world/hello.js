console.log("Visible only in console log"," po przecinku");
console.log("Visible only in console log"+" doklejony");
var zmienna='To jest zmienna hello';
var liczba = 10;
var liczba2= 12;
var liczba3 = liczba+liczba2;
console.log("Oto liczba ",liczba3)

String.prototype.ustawZnak = function(miejsce, znak) // funkcja do podmiany znaku w stringu
{
	if (miejsce > this.length - 1) return this.toString();
	else return this.substr(0, miejsce) + znak + this.substr(miejsce+1);
}
var litery='litery';
litery=litery.ustawZnak(5,"A")
console.log("Litery po zmianach to ",litery)

var somevariable = process.argv[2]; // input one
var somevariable2 = process.argv[3]; // input two
console.log(somevariable);
console.log(somevariable2);