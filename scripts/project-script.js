/*******************************************************************************

ooooooooo.   ooooooooo.         .oooooo..  ooooo                  ooo
`888   `Y88. `888   `Y88.      d8P'    `Y8 `888                   888            
 888   .d88'  888   .d88'      Y88bo.       888  oooo   .ooooo.   888   .oooo.
 888ooo88P'   888ooo88P'        `"Y8888o.   888 .8P'   d88' `88b  888  `P  )88b
 888          888                   `"Y88b  888888.    888   888  888   .oP"888
 888          888              oo     .d8P  888 `88b.  888   888  888  d8(  888
o888o        o888o             8""88888P'  o888o o888o `Y8bod8P' o888o `Y888 "8o

					Aleksandrs Kuzņecovs
					   Jūrmala, Latvia
					  PP Skola (C) 2018
					  
*******************************************************************************/
//  Funkcija datu iegūšanai un gala rezultātu izdrukāšanai
function menedzFunk() {
	let ievad1 = document.getElementById('ievade1').value.split(' '); // ievaditi skaitli/burti. Tapec ka ir .value.split =>dati bus massivaa
	let input1 = document.getElementById('maniDati1').value; // ievad1 ievaditu datu tips (skaitli vai  burti)
	let input2 = document.getElementById('maniDati2').value; // kartosanas seciba (dilstosa vai augosa)
	let outputArea = document.getElementById('mansRezultats'); // rezultatu lauks

	let sortFunction = parbaudFunk(ievad1, input1, input2); // mainigais, kurs sanems rezultatu no testešanas ()
	
	if (sortFunction[1] == false) {
		outputArea.style.color = 'red'; // kludu krasa
		outputArea.value = sortFunction[0]; // kludu rezultatu atsutam HTML
	} else {
		let outputResult = ievad1.sort(sortFunction[0]); // mainigais pareizam rezultatam
		outputArea.style.color = 'green'; // pareiza krasa
		outputArea.value = outputResult; // rezultatu atsutam HTML
	}
}
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
// Funkcija datu testešanai un rezultata iegušanai
function parbaudFunk(userIevad, valueType, sortType) {
	if (userIevad == '' || userIevad.length <= 0) {
		return ['Nav ievaditi dati!', false]; // ja bav ievaditi dati
	} else if (userIevad.includes(' ')) {
		return ['Drikst lietot tikai vienu SPACE blakus datiem!', false]; // ja ir divi pec kartas SPACE izdariti
	} else if (valueType == 0 || sortType == 0) {
		return ['Jus neesat izvelejusi input vertibu!', false]; // ja viens no inputiem nav izvelets
	} else if (sortType == 1 && valueType == 1) {
		return [(a, b) => b - a, true]; // augosa seciba skaitliem
	} else if (sortType == 2 && valueType == 1) {
		return [(a, b) => a - b, true]; // dilstosa seciba skaitliem
	} else if (sortType == 1 && valueType == 2) {
		return [(a, b) => b.localeCompare(a, 'en'), true]; // localeCompare - ir metods kurs karto burtus dilstoša secība
	} else if (sortType == 2 && valueType == 2) {
		return [, true]; // nav nekas ievadits, jo ja mes ievad1.sort() - un mums vajadzes kartot burtus pec augosa seciba tad neko nevajag rakstit, jo pec funkcija sort karto augosa seciba pec pamatdatiem
	}
}
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
//  Funkcija, lai atrisinātu doto projektu
function galvenaFunk(rezultats) {
	//  Pēc liela darba veikšanas rezultāts ir šāds:
	return `Pēc liela darba veikšanas, rezultāts ir šāds:\n\n>> ${rezultats}`;
}
/////////////////////////////////////////////////////////
//  Funkcija, lai notīrītu visas lauku vērtības
function dzestFunk() {
	document.getElementById('ievade1').value = ''; // teksta lauki
	document.getElementById('maniDati1').value = ''; // input lauki
	document.getElementById('maniDati2').value = ''; // input lauki
	document.getElementById('mansRezultats').value = ''; // izvades lauks
}
/////////////////////////////////////////////////////////
//  Izveidot jaunu dokumentu (ar diagrammu). Neveikt izmaiņas!!!
function izveidotDok() {
	//  Atvērt jaunu logu
	var jaunsLogs = window.open('', '_blank', 'top=0,left=100,width=700,height=850');
	//  Jaunā dokumenta HTML5 un CSS3 kods
	var mansDok =
		'<title>Diagramma</title><body style="margin:0; padding:10px; background-color:#e3ece3; text-align:center;"><img src="../img/skaitliunburtiKARTOSANA.png" style="width: 95%;" alt="No JavaScript code in this example"><br></body>';
	//  Ielieciet šo kodu jaunā loga dokumentā
	jaunsLogs.document.write(mansDok);
}
/////////////////////////////////////////////////////////
