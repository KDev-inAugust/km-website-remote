const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";
document.querySelector("body").appendChild(h2);
	
const refDate = new Date("1/2/2022 13:33:00")
const refDateMilliseconds = refDate.getTime();
const moonimage = document.getElementById("moonimage");
	
var curDate = new Date ()
var month = curDate.getMonth();
var day = curDate.getDay();
var hours = curDate.getHours();
var mins = curDate.getMinutes();
var secs = curDate.getSeconds();

//find differenec between current date and referance date
const refDateDif = (curDate-refDate);


//divide by one phase length in milliseconds and convert to days

const phase = 318924000;
const dayMilli = 86400000;
const moonCycle = 2551392000;

let curPhase = (refDateDif/phase);
let daysElapMath = (refDateDif/dayMilli);
let phasenumber = 0;



//below is for when the date is far enought away that reduct1_8 start returning math that is larger than 8
while (curPhase > 8) {
    curPhase=curPhase%8; 
}
function daysRemain (){
	while (daysElapMath>29.53){
	daysElapMath=daysElapMath/29.53;
	}
}

daysRemain();
let daysTill=2.75 - daysElapMath;
daysTill = daysTill.toFixed(2);



if (curPhase <= 1) {
    var x = 1 + ' New Moon'
} else if (curPhase > 1 && curPhase<= 1.99){
    var x = 2 + ' Waxing Crescent'
} else if (curPhase >= 2 && curPhase<=2.99){
    var x = 3 + ' First Quarter'
} else if (curPhase >=3 && curPhase<=3.99) {
    var x = 4 + ' Waxing Gibbous'
} else if (curPhase >=4 && curPhase<=4.99){
    var x = 5 + ' Full Moon'
} else if (curPhase >= 5 && curPhase<=5.99){
    var x = 6 + ' Wanning Gibbous'
} else if (curPhase >=6 && curPhase<=6.99) {
    var x = 7 + ' Last Quarter'
} else if (curPhase >=7 && curPhase<=7.90){
    var x = 8 + ' Waning Crescent'
} else if (curPhase >=7.91 && curPhase<=7.99){
    var x = 8 + ' New Moon'
};

setInterval(function timeUpdate(){
	var runSecs = new Date ();
	const liveYear = runSecs.getFullYear();
	const liveMonth = runSecs.getMonth();
	const liveDay = runSecs.getDate();
	const liveHours = runSecs.getHours();
	const liveMins = runSecs.getMinutes();
	const liveSecs = runSecs.getSeconds();
	document.getElementById("mpoutput").innerHTML = (`${liveMonth + 1 }` + "/" + `${liveDay}` +"/"+ `${liveYear}` + " " + "<br>" 
	+ liveHours + ":" + liveMins + ":" + liveSecs + "<br>" + "Phase " + x + "<br>"
	);
}, 1000);

function daysToNextPhase (){
	const ttnph = (daysTill);
	document.getElementById("mpoutput2").innerHTML=(ttnph + " Days until next phase")
}	
daysToNextPhase();

switch (x) {
		case 1 + ' New Moon': 
			moonimage.innerHTML="<img src=\'images/newmoon.png\' height='200px'>";
			break;
		case 2 + ' Waxing Crescent': 
			moonimage.innerHTML="<img src=\'images/waxcrescent.png\' height='200px'>";
			break;
		case 3 + ' First Quarter':
			moonimage.innerHTML="<img src=\'images/1stquarter.png\' height='200px'>";
			break;
		case 4 + ' Waxing Gibbous':
			moonimage.innerHTML="<img src=\'images/waxgibbous.png\' height='200px'>";
			break;
		case 5 + ' Full Moon':
			moonimage.innerHTML="<img src=\'images/fullmoon.png\' height='200px'>";
			break;
		case 6 + ' Wanning Gibbous':
			moonimage.innerHTML="<img src=\'images/wanegibbous.png\' height='200px'>";
			break;
		case 7 + ' Last Quarter':
			moonimage.innerHTML="<img src=\'images/lastquarter.png\' height='200px'>";
			break;
		case 8 + ' Waning Crescent':
			moonimage.innerHTML="<img src=\'images/wanecrescent.png\' height='200px'>";
			break;
	};

	
	
//Jan 2 1:33pm was the first new moon in January 2022
//29.53 Days = 2551392000 Milliseconds
//divide that by 8 and you get 318924000 milliseeconddss
//milliseconds in a day = 86400000
