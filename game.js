var scores,roundScore,activePlayer,dice,gamePlay,winningScore,inputValue;
init();

// event listener -click: defines what happens when the roll dice is clicked.



            document.querySelector('.Roll').addEventListener('click',function() {
           // when clicked compute randome number , add the random number to the current score and display corresponding dice image
            // gamePlay is the state variable which prevents the code being from run after one player wins.
            if(gamePlay)
             {    
                 
                 // dice rolls , dice image is made visible and current score is updated
                dice=Math.floor(Math.random()*6)+1;
                document.querySelector('.imageclass').style.display='block';
                document.querySelector('.imageclass').src='dice-'+dice+'.png';
                document.querySelector("#cur-"+ activePlayer).textContent=dice;

                    if(dice!==1){
                    // when dice is rolled again, the code checks if dice is one and if it is,  it will go to the next player. if the dice is not one, then the current score is updated.
                                roundScore+=dice;
                                document.querySelector('#cur-'+activePlayer).textContent=roundScore;
                            }
                   else {
                        // goes to the nextplayer when the dice is one
                                nextPlayer();
                   }
              }
       
             });
        

        document.querySelector('.hold').addEventListener('click',function(){
            
            
            if(gamePlay)
                
                {
            // when hold is pressed the current score is added to the global score and is updated in the html
                scores[activePlayer]+=roundScore;
                document.getElementById('score-'+activePlayer).textContent=scores[activePlayer];
                  getValue();
                    if(scores[activePlayer]>=winningScore)
                        
            // if the winning score is achieved, then player name is updated to "winner"
            //dice is not displayed. also the state variable is made false so that the game will not go forward if the player presses hold button or roll dice button 
                        {
                            document.getElementById('player-'+activePlayer).textContent="WINNER"; 
                            document.querySelector('.imageclass').style.display='none';
                            gamePlay=false;
                        }

                else nextPlayer();                    
                  
                }  
            

             });

    
// when the player presses new game button , the game is initialized from the start and the state variable is set to true so that the game starts rolling. 
document.querySelector('.newgame').addEventListener('click',init);

// code for changing the player when a player rolls a dice number of one or when a player presses hold
function nextPlayer(){
    
    
    roundScore=0;
    document.querySelector('#cur-'+activePlayer).textContent=roundScore;
    activePlayer===0?activePlayer=1:activePlayer=0;
    document.querySelector('#cur-'+activePlayer).textContent=roundScore;
    document.querySelector('.wrapper-1').classList.toggle('active');
    document.querySelector('.wrapper-2').classList.toggle('active');
    document.querySelector('.imageclass').style.display='none';
    
        
}
// for initializing the game.
function init(){
    scores=[0,0];
    activePlayer=0;
    roundScore=0;
    gamePlay=true;
    document.querySelector("#player-0").textContent='Player-1';
    document.querySelector('#player-1').textContent='Player-2';
    document.querySelector("#cur-0").textContent='0';
    document.querySelector('#cur-1').textContent='0';
    document.querySelector("#score-0").textContent='0';
    document.querySelector('#score-1').textContent='0';
    document.querySelector('.wrapper-1').classList.remove('active');
    document.querySelector('.wrapper-2').classList.remove('active');
    document.querySelector('.wrapper-1').classList.remove('winner');
    document.querySelector('.wrapper-2').classList.remove('winner');
    document.querySelector('.wrapper-1').classList.add('active');
    document.querySelector('.imageclass').style.display='none';
    }


//to enable user to enter the winning score. if no value is given , 20 is the default value.
function getValue()
{
inputValue=document.querySelector('.inputclass').value;
inputValue?winningScore=inputValue:winningScore=20;
}















