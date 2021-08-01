//declaring the game variable for the game state
let game = false;

//getting all html tags and setting them to const variables
const btn = document.querySelector('.start');
const timer = document.querySelector('.timer');
const seconds = document.querySelector('#seconds');
const end_screen = document.querySelector('.end_screen');
// const score = document.querySelector('.score');
const question_box = document.querySelector('.question_box');
const failure = document.querySelector('#failure');
const success = document.querySelector('#success');
let score_value = document.querySelector('#score_value');
let score_value_number = parseInt(score_value.innerHTML);

//declaring the result number and 
let multiplied_number = 0;
let addition = 0;
let substration = 0;
let divide = 0;
// let x = 0;
let i = 59;
let selector = 0;


let boxes = [];
let answers = [];


for(let i = 0;i <= 11 ; i++){
  boxes[i] = document.querySelector(`#box_${i+1}`);
}


function display_question(){
  selector = Math.floor(Math.random() * 4) + 1;
  if(selector === 1){
    let random_1 = Math.floor(Math.random() * 10) + 1;
    let random_2 = Math.floor(Math.random() * 10) + 1;
    multiplied_number = (random_1 * random_2);
    question_box.innerHTML = `${random_1}x${random_2}`;
  }
  if(selector === 2){
    let random_1 = Math.floor(Math.random() * 10) + 1;
    let random_2 = Math.floor(Math.random() * 10) + 1;
    addition = (random_1 + random_2);
    question_box.innerHTML = `${random_1}+${random_2}`;
  }
  if(selector === 3){
    let random_1 = Math.floor(Math.random() * 10) + 1;
    let random_2 = Math.floor(Math.random() * 10) + 1;
    if(random_1 > random_2){
      substration = (random_1 - random_2);
      question_box.innerHTML = `${random_1}-${random_2}`;
    }
    else if(random_1 < random_2){
      substration = (random_2 - random_1);
      question_box.innerHTML = `${random_2}-${random_1}`;
    }
  }
  if(selector === 4){
    let random_1 = Math.floor(Math.random() * 10) + 1;
    let random_2 = Math.floor(Math.random() * 10) + 1;
    divide = parseInt((random_1 / random_2));
    question_box.innerHTML = `${random_1}/${random_2}`;
  }
 
}


function generator(){
  for (let i = 0;i <= 11; i++){
    answers[i] = Math.floor(Math.random() * 100 + 1);
  }
  for (let i = 0; i <= 11; i++){
      boxes[i].innerHTML = answers[i];
    }
}


function timer_reduction(){
  timer.style.display = 'block';
  setInterval(() =>{
    seconds.innerHTML = i;
    i--;
    if(i === 0){
      end_screen.style.display = 'block';
      end_screen.innerHTML = '<h6>GAME OVER!</h6>\n' +
          '      <p>YOUR SCORE IS <span>' + score_value_number + '</span>.</p>';
      timer.style.display = 'none';
      btn.innerHTML = 'Start Game';
    }
  },1000)
}


function reset(){
  btn.innerHTML = "Reset Game";
}


function Display_Success(){
  success.style.display = 'block';
  setTimeout(()=>{
    success.style.display = 'none';
  },1000)
}


function Display_Failure(){
  failure.style.display = 'block';
  setTimeout(()=>{
    failure.style.display = 'none';
  },1000)
}


function selection(selector){
  let random_box = Math.floor(Math.random() * 12);
  if(selector == 1){
    boxes[random_box].innerHTML = multiplied_number;
  }
  if(selector == 2){
    boxes[random_box].innerHTML = addition;
  }
  if(selector == 3){
    boxes[random_box].innerHTML = substration;
  }
  if(selector == 4){
    boxes[random_box].innerHTML = divide;
    
  }
}


function increasing_score(){
  score_value.innerHTML = score_value_number;
}


btn.onclick = () =>{
  if(!game){
    display_question();
    generator();
    timer_reduction();
    reset();
    selection(selector);
    game = true;
  }
  else if(game){
    location.reload();
  }
};


boxes.forEach((box)=>{
  box.onclick = () =>{
    if(!game) {
      alert('please start the game');
    }
    else if (game){
      if(parseInt(box.innerHTML) === multiplied_number){
        generator();
        display_question();
        Display_Success();
        selection(selector);
        score_value_number++;
        increasing_score();
      }
      else if(parseInt(box.innerHTML) === addition){
        generator();
        display_question();
        Display_Success();
        selection(selector);
        score_value_number++;
        increasing_score();
      }
      else if(parseInt(box.innerHTML) === substration){
        generator();
        display_question();
        Display_Success();
        selection(selector);
        score_value_number++;
        increasing_score();
      }
      else if(parseInt(box.innerHTML) === parseInt(divide)){
        generator();
        display_question();
        Display_Success();
        selection(selector);
        score_value_number++;
        increasing_score();
      }
      else {
        Display_Failure();
      }
    }
  }
});