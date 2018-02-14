var massCity = ['минск', 'гомель', 'могилев', 'витебск', 'гродно', 'брест', 'бобруйск', 'барановичи', 'борисов', 'пинск', 'орша', 'мозырь', 'новополоцк','солигорск','лида','молодечно','полоцк','светлогорск','жлобин','речица','слуцк','жодино','слоним','кобрин','волковыск','калинковичи','сморгонь','рогачев','осиповичи','горки','новогрудок','вилейка','береза','кричев','держинск','ивацевичи','лунинец','марьина горка','поставы','пружаны','глубокое','добруш','лепель','мосты','быхов','житковичи','костюковичи','столбцы','щучин','климовичи','иваново','шклов','дрогичин','новолукомль','ошмяны','ганцевичи','хойники','несвиж','городок','смолевичи','микашевичи','белоозерск','березинозаславль','жабинка','столин','барань','березовка','старые','дороги','любань','мстиславль','ляховичи','фаниполь','воложин','малорита','петриков','скидель','клецк','копыль','червень','белыничи','чаусы',
'костюковка','толочин','браслав','ельск','чашники','логойск','узда','буда-кошелево','лельчицы','дубровно','миоры','каменец','сенно','кировск','чериков','ивье','островец','крупки','дятлово','октябрьский','бешенковичи','глуск','славгород','зельва','верхнедвинск','плещеницы','руба','шумилино','кличев','наровля','кореличи','свислочь','ветка','чечерск','шарковщина','мядель','круглое','лоев','красносельский','хотимск','мачулищи','давид-городок','докшицы','лиозно','речица','вороново','россь','краснополье','ушачи','корма','россоны','большая','берестовица','старобин','радошковичи','высокое','боровуха','смиловичи','ивенец','коханово','красная','слобода','телеханы','василевичи','городея','болбасово','копаткевичи','свислочь','брагин','уречье','богушевск','новоельня','нарочь','ружаны','ореховск','воропаево','оболь','туров','дрибин','бегомль','радунь','руденск',' елизово','ветрино','уваровичи','правдинский','логишин','подсвилье','городище','мир','коссово','дисна','паричи','сосновый бор'];
var mass = [], step=1, userCity, compCity, K_user, K_comp;

function pushCity(){
	userCity = document.getElementById('userCity').value;
	userCity = userCity.toLowerCase();
	K_user = userCity.charAt(userCity.length-1);

	pushButton.disabled = true;
	pullButton.disabled = false;

		if (massCity.indexOf(userCity) != -1 && mass.indexOf(userCity) == -1) {
				if (step ==1) {
					mass.push(userCity);
					var li = document.createElement("li");
			    	li.innerHTML = "User: " + userCity;
			    	document.getElementById("answer").appendChild(li);
				}
				if (step > 1){
					if (userCity.charAt(0) == K_comp){
					mass.push(userCity);
					var li = document.createElement("li");
				    li.innerHTML = "User: " + userCity;
				    document.getElementById("answer").appendChild(li);
					}else{
						var li_l = document.createElement("li");
						li_l.innerHTML = "The last letter is: " + K_comp + " :Enter another city";
						document.getElementById("computer").appendChild(li_l);
					}
				}
		}else {
			pushButton.disabled = false;
			pullButton.disabled = true;
			var li_l = document.createElement("li");
			li_l.innerHTML = "Enter another city";
			document.getElementById("computer").appendChild(li_l);
		}

	if (K_user == 'й' || K_user == 'ь'|| K_user == 'ы' || K_user == 'э'|| K_user == 'ъ') 
		K_user = userCity.charAt(userCity.length-2);
}

function pullCity(){
	pushButton.disabled = false;
	pullButton.disabled = true;
	var rand,l = 0;
	step ++;
	do{
		rand = Math.floor(Math.random()*massCity.length);
		compCity = massCity[rand];
		compCity = compCity.toLowerCase();
		K_comp = compCity.charAt(compCity.length-1);
		l++;
		if (l > massCity.length) {
			var li_l = document.createElement("li");
			li_l.innerHTML = "I'm loser. You're the best player!";
			document.getElementById("computer").appendChild(li_l);
			gameOver(' User is winner!');
			return;
		}
    }while(mass.indexOf(compCity) != -1 
		|| compCity.charAt(0) != K_user)

    mass.push(compCity);
	var li_l = document.createElement("li");
	li_l.innerHTML = "Computer: " + compCity;
	document.getElementById("answer").appendChild(li_l);
	
	if (K_comp == 'й' || K_comp == 'ь'|| K_comp == 'ы' || K_comp == 'э'|| K_comp == 'ъ') 
		K_comp = compCity.charAt(compCity.length-2);

		
}
function gameOver(a){
	var text;
	if(a) text = a;
	else text = ' Computer is winner!';
	pushButton.disabled = true;
	pullButton.disabled = true;
	restartButton.disabled = false;

	var li_l = document.createElement("li");
	li_l.innerHTML = "GameOver." + text;
	document.getElementById("computer").appendChild(li_l);
}
function gameRestart(){
	location.reload(true)
}
