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
	let ievad1 = document.getElementById('ievade1').value; // a puse (katets)
	let ievad2 = document.getElementById('ievade2').value; // b puse (katets)
	let ievad3 = document.getElementById('ievade3').value; // c puse (hipotenuza)
	let resultArea = document.getElementById('mansRezultats'); // izvades lauks
	let parbaudResult = parbaudFunk(ievad1, ievad2, ievad3); // mainigajs lai sanemtu rezultatu

	if (parbaudResult[1] === false) {
		resultArea.value = parbaudResult[0]; // sanemam negativo atbildi
		resultArea.style.color = 'red'; // krasa ir sarkana, jo rezultats ir negativs
	} else {
		let finalResult = galvenaFunk(parbaudResult[0]); // atsutam pozitivo rezultatu galvenaja funkcija
		resultArea.value = finalResult; // galvenaja funkcija rezultats bus redzams izvades lauka
		resultArea.style.color = 'lime'; // krasa ir laima, jo rezultats ir pozitivs
	}
}
/////////////////////////////////////////////////////////
// Funkcija datu testešanai un rezultata iegušanai
function parbaudFunk(ievad1, ievad2, ievad3) {
	let result; // rezultata mainigajs
	if (ievad1 == '' && ievad2 == '' && ievad3 == '') {
		result = ['Ievades laukos nevar but tuksi!', false]; // parbaud vai viens no laukiem ir tukss
	} else if (ievad1 == '' || ievad2 == '' || ievad3 == '') {
		result = ['Kaut kads ievades lauks ir tukss!', false]; // parbaud vai lauks kaut kads ir tukss
	} else if (Number(ievad1) >= Number(ievad3) || Number(ievad3) <= Number(ievad2)) {
		result = ['Hipotenuza c var but tikai vairak neka kateti!', false]; // parbaud matematiskus likumus
	} else if (Number(ievad1) + Number(ievad2) >= Number(ievad3)) {
		result = ['Katetu summa nevar but vienada vai vairak neka hipotenuza c!', false]; // parbaud matematiskus likumus
	} else {
		// Funkcija lai atrastu trijstura laukumu
		function findTriangleArea(a, b) {
			return (area = 0.5 * a * b);
		}
		let triangleAreaResult = findTriangleArea(ievad1, ievad2); // trijsuta laukums (rezultats)
		ievad1 = Number(ievad1); // to number
		ievad2 = Number(ievad2); // to number
		ievad3 = Number(ievad3); // to number
		result = [`Perimetrs = ${ievad1 + ievad2 + ievad3}\n>> Pusperimetrs = ${(ievad1 + ievad2 + ievad3) / 2}\n>> Diametrs = ${2 * Math.floor(Math.sqrt(ievad1 ** 2 + ievad2 ** 2))}\n>> Laukums = ${triangleAreaResult} `,true,];
	}
	return result; // atsutam rezultatu uz menedzFunk()
}
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
	document.getElementById('ievade2').value; // teksta lauki
	document.getElementById('ievade3').value; // teksta lauki
	document.getElementById('mansRezultats').value = ''; // izvades lauks
}
/////////////////////////////////////////////////////////
//  Izveidot jaunu dokumentu (ar diagrammu). Neveikt izmaiņas!!!
function izveidotDok() {
	//  Atvērt jaunu logu
	var jaunsLogs = window.open('', '_blank', 'top=0,left=100,width=700,height=850');
	//  Jaunā dokumenta HTML5 un CSS3 kods
	var mansDok =
		'<title>Diagramma</title><body style="margin:0; padding:10px; background-color:#e3ece3; text-align:center;"><img src="./images/flowchart_Mon_Nov_06_2023_17_45_33_GMT+0200_(Eastern_European_Standard_Time).svg" style="width: 95%;" alt="No JavaScript code in this example"><br></body>';
	//  Ielieciet šo kodu jaunā loga dokumentā
	jaunsLogs.document.write(mansDok);
}
/////////////////////////////////////////////////////////
