const msg = document.querySelector('#message');
const btn = document.querySelector('button');

let date = new Date().toString();
let time = date.substr(16,2);
let timings = ['1','2','3','4','5','6','7','8','9','10','11','12',
    '13','14','15','16','17','18','19','20','21','22','23','24'];


btn.onclick = function () {
    for(let i = 0; i < timings.length; i++){
        if(timings[i] === time && timings[i] <= 12 && timings[i] >= 6){
            msg.innerHTML = "<h1>GOOD Morning!!!</h1>";
        }
        else if(timings[i] === time && timings[i] > 12 && timings[i] <= 17){
            msg.innerHTML = "<h1>GOOD Afternoon!!!</h1>";
        }
        else if(timings[i] === time && timings[i] > 17 && timings[i] <= 20){
            msg.innerHTML = "<h1>GOOD Afternoon!!!</h1>";
        }
        else if(timings[i] === time && timings[i] > 20 && timings[i] <= 24){
            msg.innerHTML = "<h1>GOOD Afternoon!!!</h1>";
        }
        else if(timings[i] === time && timings[i] >= 1 && timings[i] < 6){
            msg.innerHTML = "<h1>you should probably be sleeping rightnow!!!</h1>";
        }
    }

};
