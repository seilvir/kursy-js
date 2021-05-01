
 document.write("hello world - i am visible on site !");
 console.log("Visible only in console log");
 function sprawdzaj()
 {
	var handler = document.getElementById("pole").value; //uchwyt - sposob  pobrania danych po id ze strony
	if (handler > 0 ) document.getElementById("wynik").innerHTML="dodatnia";

	else if (handler < 0) document.getElementById("wynik").innerHTML="ujemna";
	
	else if (handler == 0 )document.getElementById("wynik").innerHTML="zero";
	else document.getElementById("wynik").innerHTML="This is not a number. You don't nothing John Snow !";
	//document.write("Liczba to "+handler);
 }
		document.getElementById("zegarek").innerHTML = 
		dzien+"/"+miesiac+"/"+rok+"   "+godzina+":"+minuta+":"+sekunda;

		setTimeout("odliczanie()",1000);
		

	
	
 
