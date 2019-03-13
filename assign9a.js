//Declaring vars
var user ="";
var password = "";
var package;
var acc;
var online = false;
var prem2 = false;
//Class constructor
class User {
	constructor(username, password){
		this.username = username;
		this.password = password;
	}	
}

function signup(){
	user = document.getElementById('username').value;
		password = document.getElementById('password').value;
		acc = new User(user, password);
		return acc;
}


//login validation
function login(){
	if (acc.username == document.getElementById('username').value && acc.password == document.getElementById('password').value ) {
		document.getElementById('msg').innerHTML = ("Login successful");
		document.getElementById("out").style.display="inline";
		document.getElementById("in").style.display="none";
		online = true;
	}
	else{
		document.getElementById('msg').innerHTML = ("Wrong Username or Password");
		online = false;
	}
	return online;
}
function logout(){
	if (online == true){
		online = false;
		document.getElementById('msg').innerHTML = ("Logged out");
		document.getElementById("out").style.display="none";
		document.getElementById("in").style.display="inline";
	}
	else {
		document.getElementById('msg').innerHTML = ("You are not logged in");
	}	
}
//Premium Membership
class premium extends User{
	constructor(username, password, prem){
		super(username, password);
		this.prem = prem;
	}
}
function purchase(){
	if (online == true) {
		acc = new premium(user, password, true);
		document.getElementById('msg2').innerHTML = ("Purchased Premium Membership");
	}
	else{
		document.getElementById('msg2').innerHTML = ("You are not logged in");
	}
}

function getPrem(){
	if(online == true){
		if (acc.prem == true) {
		document.getElementById('msg2').innerHTML = ("You are a premium member");
	}
		else{
			document.getElementById('msg2').innerHTML = ("You are not a premium member");
		}
	}
	
	else{
		document.getElementById('msg2').innerHTML = ("You are not logged in");
	}
}
//used for testing errors
function log(){
		console.log(user);
		console.log(password);
		console.log(acc.username);
		console.log(acc.password);
		console.log(online);
	}

function clearmsg(){
	document.getElementById('msg').innerHTML = ("");
	document.getElementById('msg2').innerHTML = ("");
}

function hide(){
	document.getElementById("out").style.display="none";
}

//event handling
setInterval(clearmsg, 5000)
setTimeout(hide, 0)