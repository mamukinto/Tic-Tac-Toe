var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var b3 = document.getElementById("b3");
var b4 = document.getElementById("b4");
var b5 = document.getElementById("b5");
var b6 = document.getElementById("b6");
var b7 = document.getElementById("b7");
var b8 = document.getElementById("b8");
var b9 = document.getElementById("b9");
var b1sensor 
var b2sensor
var b3sensor
var b4sensor
var b5sensor
var b6sensor
var b7sensor
var b8sensor
var b9sensor
var counter = 3;
var a = "lol"
var available = [];









function check(which) {

// counter++;
	switch (which) {
  case 1:
  	if (counter%2 === 1) {
    b1.innerHTML = "X";
    b1sensor = "X";
	}
	else if (counter%2 === 0) {
	b1.innerHTML = "O";
	b1sensor = "O";
	}
    break;
  case 2:
    if (counter%2 === 1) {
    b2.innerHTML = "X";
    b2sensor = "X";
	}
	else if (counter%2 === 0) {
	b2.innerHTML = "O";
	b2sensor = "O";
	}
	break;
  case 3:
    if (counter%2 === 1) {
    b3.innerHTML = "X";
    b3sensor = "X";
	}
	else if (counter%2 === 0) {
	b3.innerHTML = "O";
	b3sensor = "O";
	}
    break;
  case 4:
    if (counter%2 === 1) {
    b4.innerHTML = "X";
    b4sensor = "X";
	}
	else if (counter%2 === 0) {
	b4.innerHTML = "O";
	b4sensor = "O";
	}
    break;
  case 5:
    if (counter%2 === 1) {
    b5.innerHTML = "X";
    b5sensor = "X";
	}
	else if (counter%2 === 0) {
	b5.innerHTML = "O";
	b5sensor = "O";
	}
  	break;
  case 6:
    if (counter%2 === 1) {
    b6.innerHTML = "X";
    b6sensor = "X";
	}
	else if (counter%2 === 0) {
	b6.innerHTML = "O";
	b6sensor = "O";
	}    break;
  case 7:
    if (counter%2 === 1) {
    b7.innerHTML = "X";
    b7sensor = "X";
	}
	else if (counter%2 === 0) {
	b7.innerHTML = "O";
	b7sensor = "O";
	}
    break;
  case 8:
    if (counter%2 === 1) {
    b8.innerHTML = "X";
    b8sensor = "X";
	}
	else if (counter%2 === 0) {
	b8.innerHTML = "O";
	b8sensor = "O";
	}
    break;
  case 9:
    if (counter%2 === 1) {
    b9.innerHTML = "X";
    b9sensor = "X";
	}
	else if (counter%2 === 0) {
	b9.innerHTML = "O";
	b9sensor = "O";
	}
    break;
}


if (((b1sensor === "X" && (b1sensor === b2sensor && b2sensor === b3sensor)) || (b4sensor === "X" && (b4sensor === b5sensor && b5sensor === b6sensor)) || (b7sensor === "X" && (b7sensor === b8sensor  && b8sensor === b9sensor)) || (b1sensor === "X" && (b1sensor === b5sensor && b5sensor === b9sensor)) || (b2sensor === "X" && (b2sensor === b5sensor && b5sensor === b8sensor)) || (b3sensor === "X" && (b3sensor === b5sensor && b5sensor === b7sensor)) || (b3sensor === "X" && (b3sensor === b6sensor && b6sensor === b9sensor)) || (b1sensor === "X" && (b1sensor === b4sensor && b4sensor === b7sensor)))) {
	win("x")
	a = "shmol"
}




console.log("b1: " + b1sensor +
		      "  b2: " + b2sensor + 
		      "  b3: " + b3sensor + 
		      "  b4: " + b4sensor +
		      "  b5: " + b5sensor +
		      "  b6: " + b6sensor +
		      "  b7: " + b7sensor +
		      "  b8: " + b8sensor +
		      "  b9: " + b9sensor )		
addAvailable();
moveComp();
if (b1sensor != undefined && b2sensor != undefined && b3sensor != undefined && b4sensor != undefined && b5sensor != undefined && b6sensor != undefined && b7sensor != undefined && b8sensor != undefined && b9sensor != undefined && a==="lol") {
	setTimeout(function() { alert("IT'S a DRAW!"); }, 400);
	restart();
}

}


function restart() {
	b1sensor = undefined;
	b2sensor = undefined;
	b3sensor = undefined;
	b4sensor = undefined;
	b5sensor = undefined;
	b6sensor = undefined;
	b7sensor = undefined;
	b8sensor = undefined;
	b9sensor = undefined;

	b1.innerHTML = " ";
	b2.innerHTML = " ";
	b3.innerHTML = " ";
	b4.innerHTML = " ";
	b5.innerHTML = " ";
	b6.innerHTML = " ";
	b7.innerHTML = " ";
	b8.innerHTML = " ";
	b9.innerHTML = " ";
	available = [];

	a = "lol"
}


function addAvailable() {
	available = [];
	if (!b1sensor) {
		available.push(b1)
	}
	if (!b2sensor) {
		available.push(b2)	
	}
	if (!b3sensor) {
		available.push(b3)
	}
	if (!b4sensor) {
		available.push(b4)
	}
	if (!b5sensor) {
		available.push(b5)
	}
	if (!b6sensor) {
		available.push(b6)
	}
	if (!b7sensor) {
		available.push(b7)
	}
	if (!b8sensor) {
		available.push(b8)
	}
	if (!b9sensor) {
		available.push(b9)
	}
	console.log(available)

}



function moveComp() {
	
	var compCheck = available[Math.floor(Math.random()*available.length)]
	if (compCheck != undefined) {
	compCheck.innerHTML = "O";
	}
	else {
		win("draw");
	}
	if (compCheck.getAttribute('id')==="b1") {
		b1sensor = "O";
	}
	if (compCheck.getAttribute('id')==="b2") {
		b2sensor = "O";
	}
	if (compCheck.getAttribute('id')==="b3") {
		b3sensor = "O";
	}
	if (compCheck.getAttribute('id')==="b4") {
		b4sensor = "O";
	}
	if (compCheck.getAttribute('id')==="b5") {
		b5sensor = "O";
	}
	if (compCheck.getAttribute('id')==="b6") {
		b6sensor = "O";
	}
	if (compCheck.getAttribute('id')==="b7") {
		b7sensor = "O";
	}
	if (compCheck.getAttribute('id')==="b8") {
		b8sensor = "O";
	}
	if (compCheck.getAttribute('id')==="b9") {
		b9sensor = "O";
	}
	addAvailable();
	if (((b1sensor === "O" && (b1sensor === b2sensor && b2sensor === b3sensor)) || (b4sensor === "O" && (b4sensor === b5sensor && b5sensor === b6sensor)) || (b7sensor === "O" && (b7sensor === b8sensor  && b8sensor === b9sensor)) || (b1sensor === "O" && (b1sensor === b5sensor && b5sensor === b9sensor)) || (b2sensor === "O" && (b2sensor === b5sensor && b5sensor === b8sensor)) || (b3sensor === "O" && (b3sensor === b5sensor && b5sensor === b7sensor)) || (b3sensor === "O" && (b3sensor === b6sensor && b6sensor === b9sensor)) || (b1sensor === "O" && (b1sensor === b4sensor && b4sensor === b7sensor)))) {
 	win("o")
 	a = "shmol"
}
}

	
function win(who) {
	
	if (who === "x") {
		setTimeout(function() { alert("X WON"); }, 400);

	}
	else if (who === "o") {
		setTimeout(function() { alert("O WON"); }, 400);
	}
	else if (who === "draw") {
		setTimeout(function() { alert("IT'S a DRAW!"); }, 400);
	}
restart()
}	