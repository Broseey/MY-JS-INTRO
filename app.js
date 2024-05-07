function ageInDays(){
    var birthYear = prompt('What year were you born... Good friend?');
    var ageInDayz = (2023 -birthYear)*365;
    var newElement  = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageInDayz + ' days old');
    newElement.setAttribute('id', 'ageInDays');
    newElement.appendChild(textAnswer);
    document.getElementById('result').appendChild(newElement);
    
}

function result() {
    document.getElementById('ageInDays').remove();
}



function generateImg(){
    var image = document.createElement('img');
    var div = document.getElementById('image-gen');
    image.setAttribute('id', 'imagia')
    image.src="/images/SHIRT2.jpg";
    div.appendChild(image);
}

function removee() {
    document.getElementById('imagia').remove();
}

//ROCK PAPER SCISSORS 
function rpsGame(yourChoice){
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice= yourChoice.id;
   
    botChoice=numberToChoice(ranToRpsInt());
    console.log('computerChoice',botChoice);
   
    results = decideWinner(humanChoice, botChoice);
    console.log(results);
   
    message = finalMessage(results);
    console.log(message);

    rpsFrontEnd(yourChoice.id, botChoice, message);
}

function ranToRpsInt(){
    return Math.floor(Math.random()*3);
}
function numberToChoice(number) {
    return['rock','paper','scissors'][number]
}


function decideWinner(yourChoice, computerChoice){
    var rpsDataBase = {
        'rock':{'scissors':1, 'rock':0.5, 'paper':0},
        'paper':{'rock':1, 'paper':0.5, 'scissors':0 },
        'scissors':{'paper':1, 'scissors':0.5, 'rock':0},
    }

    var yourScore = rpsDataBase[yourChoice][computerChoice];
    var computerScore = rpsDataBase[computerChoice][yourChoice];

    return [yourScore,computerScore];
}

function finalMessage([yourScore,computerScore]){
    if(yourScore === 0){
        return {'message': 'You lost', 'color': 'red'};
    }else if(yourScore === 0.5){
        return {'message': 'You tied', 'color': 'red'};
    }else{
        return {'message': 'You Won!', 'color': 'red'};
    }
}


function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    //Let's Remove All The Images 
    document.getElementById('rock').remove()
    document.getElementById('paper').remove()
    document.getElementById('scissors').remove()

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1);'>"
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size:60px; padding:30px; '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1);'>"

    document.getElementById('rockpaper-scissors').appendChild(humanDiv);
    document.getElementById('rockpaper-scissors').appendChild(messageDiv);
    document.getElementById('rockpaper-scissors').appendChild(botDiv);

}


//CHALLENGE 4: CHANGE THE COLOR OF ALL THE BUTTONS
let all_buttons = document.getElementsByTagName('button');


let copyAllButtons = [];
for (let i=0; i< all_buttons.length; i++){
    copyAllButtons.push(all_buttons[i].classList[1])
}

console.log(copyAllButtons);

function buttonColorChange(buttonthingy) {
    if(buttonthingy.value === 'red'){
        buttonRed();
    }else if(buttonthingy.value === 'green') {
        buttonGreen();
    }else if(buttonthingy.value === 'reset'){
        buttonColorReset();
    }else if(buttonthingy.value === 'random'){
        randomColors();
    }
}

function buttonRed() {
    for (let i=0; i<all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonGreen() {
    for (let i=0; i<all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonColorReset() {
    for (let i=0; i<all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function randomColors() {
    let choices = ['btn-success', 'btn-danger', 'btn-primary', 'btn-warning'];
    function calc() {
       return choices [Math.floor(Math.random()*4)];
    }
    for (let i=0; i<all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(calc());
    }
}