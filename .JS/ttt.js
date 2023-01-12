var player = "X";
var k = 0;
var total = 0; 
var b = 0;
var game_over =  false;
var selections= new Array();
selections['X'] = [0,0,0,0,0,0,0,0,0];
selections['O'] = [0,0,0,0,0,0,0,0,0];
var w =  [
	[1,1,1,0,0,0,0,0,0], 
	[0,0,0,1,1,1,0,0,0], 
	[0,0,0,0,0,0,1,1,1], 
	[1,0,0,1,0,0,1,0,0],
	[0,1,0,0,1,0,0,1,0],
	[0,0,1,0,0,1,0,0,1],
	[1,0,0,0,1,0,0,0,1],
	[0,0,1,0,1,0,1,0,0],
];


function generateGame(){
  var m= document.getElementById("game-board");
  document.getElementById("game-board").innerHTML='';
  selections['X'] = [0,0,0,0,0,0,0,0,0];
  selections['O'] = [0,0,0,0,0,0,0,0,0];
  var unique_id = 0;
  total=0;  
  alert("hi");
  for ( row=0; row<3; row++){
    var l = document.createElement("i");
    m.appendChild(l);
    for( col=0; col<3; col++){
      var button = document.createElement("input");
      button.setAttribute("id", unique_id)
			button.setAttribute("value", ' ');
			button.setAttribute("background-color", 'transperent');
			button.setAttribute("name", 'grid');
			button.setAttribute("class", 'grid-cell');
			button.setAttribute("type", 'button');
			button.setAttribute("onclick", "markCheck(this)");
			document.getElementById('game-board').appendChild(button);
		  unique_id++;
      

    }
		var breakline = document.createElement("br");
			document.getElementById('game-board').appendChild(breakline);
    }
  }
function markCheck(obj){
  obj.value=player;
  var cell = Number(obj.id);
  selections[player][cell]=1;
  console.log(`player ${player} marked ${obj.id}`);
  
  if(player=='X'){
    checkPlayerHasAnyWinningPattern()
    obj.setAttribute("class" , 'green-player');
    player='O';
  }
  else{
    checkPlayerHasAnyWinningPattern()
    obj.setAttribute("class" , 'red-player');

    player='X';
  }
  obj.setAttribute("disabled" , 'disabled');
  total++;
  if (total==9){
    console.log("player x marked "+ selections['X']);
		console.log("player o marked "+ selections['O']);
		alert("Board is full!");
  }
  else{


  }

  }
  function checkPlayerHasAnyWinningPattern(){
    for(i=0; i<8; i++){
      if(selections[player]===w[i]){
        game_over=true;
          if (game_over = true){
            alert("player" + player + "good game!")
          }
        }

      }
      }

