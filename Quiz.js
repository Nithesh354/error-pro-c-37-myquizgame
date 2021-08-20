class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){                                                                                                     
    
    question.hide()
    background("yellow")
    fill(0);
    textSize(30);
    text("Result of the quiz",70,100)
    Contestant.getPlayerInfo()
    if (allContestants!==undefined){
      fill("blue")
      textSize(20)
    text("NOTE:the contestant who gave the right answer's name is in red!!",150,170)
    for(var plr in allContestants){
      var correctAns = "2";
      if (correctAns === allContestants[plr].answer)
        fill("Green")
      else
        fill("red");
    
        text(allContestants[plr].name + ": " + allContestants[plr].answer, 250,display_Answers)
    }
    }
  }
}
