var massCity = ['минск', 'гомель', 'могилев', 'витебск', 'гродно', 'брест', 'бобруйск', 'барановичи', 'борисов', 'пинск', 'орша', 'мозырь', 'новополоцк','солигорск','лида','молодечно','полоцк','светлогорск','жлобин','речица','слуцк','жодино','слоним','кобрин','волковыск','калинковичи','сморгонь','рогачев','осиповичи','горки','новогрудок','вилейка','береза','кричев','держинск','ивацевичи','лунинец','марьина горка','поставы','пружаны','глубокое','добруш','лепель','мосты','быхов','житковичи','костюковичи','столбцы','щучин','климовичи','иваново','шклов','дрогичин','новолукомль','ошмяны','ганцевичи','хойники','несвиж','городок','смолевичи','микашевичи','белоозерск','березинозаславль','жабинка','столин','барань','березовка','старые','дороги','любань','мстиславль','ляховичи','фаниполь','воложин','малорита','петриков','скидель','клецк','копыль','червень','белыничи','чаусы','костюковка','толочин','браслав','ельск','чашники','логойск','узда','буда-кошелево','лельчицы','дубровно','миоры','каменец','сенно','кировск','чериков','ивье','островец','крупки','дятлово','октябрьский','бешенковичи','глуск','славгород','зельва','верхнедвинск','плещеницы','руба','шумилино','кличев','наровля','кореличи','свислочь','ветка','чечерск','шарковщина','мядель','круглое','лоев','красносельский','хотимск','мачулищи','давид-городок','докшицы','лиозно','речица','вороново','россь','краснополье','ушачи','корма','россоны','большая','берестовица','старобин','радошковичи','высокое','боровуха','смиловичи','ивенец','коханово','красная','слобода','телеханы','василевичи','городея','болбасово','копаткевичи','свислочь','брагин','уречье','богушевск','новоельня','нарочь','ружаны','ореховск','воропаево','оболь','туров','дрибин','бегомль','радунь','руденск',' елизово','ветрино','уваровичи','правдинский','логишин','подсвилье','городище','мир','коссово','дисна','паричи','сосновый бор'];
var userCity, rand, compCity, li;
	function getCity(){
    
	var  mass=[], step;
	userCity = document.getElementById('userCity').value;
	userCity = userCity.toLowerCase();
	side:
	while (userCity){
		if (massCity.indexOf(userCity) != -1) {
			mass.push(userCity);
			li = document.createElement("li");
			li.innerHTML = 'user: ' + userCity;
			document.getElementById("answer").appendChild(li);
			rand = Math.floor(Math.random() * massCity.length);
			compCity = massCity[rand];
			compCity = compCity.toLowerCase();
			var user = userCity.charAt(userCity.length-1);
			if (user == 'й' || user == 'ь'|| user == 'ы' || user == 'э'|| user == 'ъ' )  user = userCity.charAt(userCity.length-2)
			step = 0;
			
			while(user != compCity.charAt(0) || mass.indexOf(compCity) != -1){
				rand = Math.floor(Math.random() * massCity.length);
				step++;
				compCity = massCity[rand];
				compCity = compCity.toLowerCase();
				if (step > massCity.length){
				 alert("You are winner!");
				 li.innerHTML = '--------------------';
				 break side;
				}
				
			}

		}
		alert("compCity - " + compCity);
		mass.push(compCity);
		li = document.createElement("li");
		li.innerHTML = 'comp: ' + compCity;
		document.getElementById("answer").appendChild(li);
		userCity = prompt("Enter ur word");
		userCity = userCity.toLowerCase();
		var comp = compCity.charAt(compCity.length-1);
		if (comp == 'й' || comp == 'ь'|| comp == 'ы' || comp == 'э'|| comp == 'ъ' )  comp = compCity.charAt(compCity.length-2);

		while (massCity.indexOf(userCity) == -1 || comp != userCity.charAt(0) ||  mass.indexOf(userCity) != -1)	{
			userCity = prompt("Enter ur word");
			userCity = userCity.toLowerCase();
			if(!userCity){
				alert("You are loser");
				li.innerHTML = '--------------------';
				break;
			} 
		}
	}
}		