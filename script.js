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
//above converts time form ref date into days by diving by a day in milliseconds
let phasenumber = 0;



//below is for when the date is far enought away that reduct1_8 start returning math that is larger than 8
while (curPhase > 8) {
    curPhase=curPhase%8; 
}

//below is math that calculates the days remaining until the next phase
setInterval(function daysRemain (){
	while (daysElapMath>29.53){
		//take total number of days since refenace date (a new moon)
	daysElapMath=daysElapMath/29.53;
	//divide by number of cycles
	daysElapMath=daysElapMath%1;
	//howmany days into current cycle are we (find remainder of whole integer)
	daysElapMath=daysElapMath*29.53;
	//multiply that by a whole cycle to fine how far into current cycle we are from new moon
	daysElapMath=daysElapMath%3.69;
	//find out how much remians after diving by a whole phase to see how far into this phase we are
	daysElapMath=3.69-daysElapMath;
	//get difference between how far in this phase we are and a full phase wchi will get less over the course of the phase
	daysTill=daysElapMath.toFixed(2);
	//limit to two decimal points
	document.getElementById("mpoutput2").innerHTML=(daysTill + " Days until next phase")
	}
},1000);


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
