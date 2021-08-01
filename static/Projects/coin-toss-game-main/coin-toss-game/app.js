const player_s = document.querySelector('#player-selection');
const  computer_s = document.querySelector('#computer-selection');
const player_score = document.querySelector('#player-score');
const computer_score = document.querySelector('#computer-score');
const winner = document.querySelector('#winner');
const img = document.querySelector('#image');
let bool = false;
// const btn = document.querySelectorAll('button');

let game_over = false;
let p_score = 0;
let c_score = 0;
let coin = 0;
let c_random = 0;

if(game_over === false){
document.querySelectorAll('button').forEach(function (button) {
    button.onclick = function () {
        if (bool === true){
            img.classList.remove('animate');
            bool = false;
        }
        coin = Math.floor(Math.random() * 2);
        c_random = Math.floor(Math.random() * 2);
        if(button.dataset.type === 'heads'){
            player_s.innerHTML = 'heads';
            player_s.style.color = 'green';
            if(coin === 0){
                p_score++;
                player_score.innerHTML = p_score;
                if(c_random === 0){
                    c_score++;
                    computer_score.innerHTML = c_score;
                    computer_s.innerHTML = 'heads';
                    computer_s.style.color = 'green';
                }
                else if(c_random === 1){
                    computer_s.innerHTML = 'tails';
                    computer_s.style.color = 'blue';
                }
            }
            else if(coin === 1){
                if(c_random === 0){
                    computer_s.innerHTML = 'heads';
                    computer_s.style.color = 'green';
                }
                else if(c_random === 1){
                    c_score++;
                    computer_score.innerHTML = c_score;
                    computer_s.innerHTML = 'tails';
                    computer_s.style.color = 'blue';
                }
            }
        }
        else if(button.dataset.type === 'tails'){
            player_s.innerHTML = 'tails';
            player_s.style.color = 'blue';
            if(coin === 0){
                if(c_random === 0){
                    c_score++;
                    computer_score.innerHTML = c_score;
                    computer_s.innerHTML = 'heads';
                    computer_s.style.color = 'green';
                }
                else if(c_random === 1){
                    computer_s.innerHTML = 'tails';
                    computer_s.style.color = 'blue';
                }
            }
            else if(coin === 1){
                p_score++;
                player_score.innerHTML = p_score;
                if(c_random === 0){
                    computer_s.innerHTML = 'heads';
                    computer_s.style.color = 'green';
                }
                else if(c_random === 1){
                    c_score++;
                    computer_score.innerHTML = c_score;
                    computer_s.innerHTML = 'tails';
                    computer_s.style.color = 'blue';
                }
            }
        }
        if(p_score === 5){
            winner.innerHTML = '<h1>You Win!!!</h1>';
            game_over = true;
            document.querySelectorAll('button').forEach(function (button) {
                button.style.display = 'none';
            })
            document.querySelector('#choose').style.display = 'none';
        }
        else if(c_score === 5){
            winner.innerHTML = '<h1>Computer Wins!!!</h1>';
            game_over = true;
            document.querySelectorAll('button').forEach(function (button) {
                button.style.display = 'none';
            })
            document.querySelector('#choose').style.display = 'none';
        }
        if (bool === false){
            img.className = 'animate';
            bool = true
        }

    }

    
})}



