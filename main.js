
//Variables
	
	var dollars = 0;
	const standCash = 5;
	const farmCash = 15;
	const factoryCash = 30;	
	var upgrades = [0, 0, 0];
	var upgradeCost = [25,75,150];
	
	
//Functions

	function add(){
		dollars = dollars+5;
		refresh();
	}	
	function timer(){
		dollars = dollars+(upgrades[0]*standCash)+(upgrades[1]*farmCash)+(upgrades[2]*factoryCash);
		refresh();
	}
	function refresh(){
		document.getElementById('dollarAmount').value= dollars;
		document.getElementById('standAmount').innerHTML = "You have "+ upgrades[0] + " Lemonade Stand";
		document.getElementById('standCost').innerHTML = "Stands Cost $"+ upgradeCost[0];
		document.getElementById('standCash').innerHTML = "Generating $"+ standCash*upgrades[0] + " Per Second ";
		document.getElementById('farmAmount').innerHTML = "You have "+ upgrades[1] + " Lemon Farms";
		document.getElementById('farmCost').innerHTML = "Farms Cost $"+ upgradeCost[1];
		document.getElementById('farmCash').innerHTML = "Generating $"+ farmCash*upgrades[1] + " Per Second ";
		document.getElementById('factoryAmount').innerHTML = "You have "+ upgrades[2] + " Filling Factories";
		document.getElementById('factoryCash').innerHTML = "Generating $"+ factoryCash*upgrades[2] + " Per Second ";
		document.getElementById('factoryCost').innerHTML = "Factories Cost $"+ upgradeCost[2];
	
		
	}	
	function buyStand(index){
		if (dollars>=upgradeCost[index]) {
			dollars = dollars - upgradeCost[index];
			upgrades[index] = upgrades[index] + 1;
			upgradeCost[index] = upgradeCost[index] * 1.5;
			refresh();

		}
	}

//Handling
	setInterval(timer, 1000)
	
	