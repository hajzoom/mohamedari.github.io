var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
var key = 'APPID=3a841bc6a373e8a46af169ad2bbfa9d7';
var unit = 'units=imperial';
var city = document.getElementById("city");
var u = 0;
var userinput;


function work(){
	getWeather();
	
}
function getWeather(){
	fetch(api+document.getElementById("city").value+'&'+key+'&'+unit).then(result => {
		return result.json();
	}).then(result => {
		info(result);
	})
}

function info(serverData){
	console.log(serverData);
	 u = serverData.main.temp;
	console.log(u);
	if (u > 130){
		document.getElementById('drink').innerHTML = "If you're still alive then by all means, indulge.";
	}
	else if(u < 70 && u > 40 ){
		document.getElementById('drink').innerHTML = "You will be judged, but it is acceptable to enjoy";
	}
	else if(u < 40 && u > 30){
		document.getElementById('drink').innerHTML = "It will be frowned upon but that never stopped anyone has it.";
	}
	else if(u < 30 && u > 0){
		document.getElementById('drink').innerHTML = "for the sake of yourself and others, opt out for a warm beverage";
	}
	else if(u < 0){
		document.getElementById('drink').innerHTML = "You probably have more important matters than this in this weather, but in the name of god and everything that is holy, opt out for a warm beverage.";
	}
	else {
		document.getElementById('drink').innerHTML = "Go ahead and enjoy yourself hotshot.";
	}


}

function log(){
	console.log(document.getElementById("city"));
	console.log(api+document.getElementById("city").value+'&'+key+'&'+unit);
	
}
