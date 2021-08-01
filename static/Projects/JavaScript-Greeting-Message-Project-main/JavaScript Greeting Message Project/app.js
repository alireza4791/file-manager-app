const h = document.querySelector('h1');
let date = new Date();
let d = date.getHours();

let user = prompt("Please Enter Your Name: ");

    if (d >= 6 && d < 12) {
        h.innerHTML = 'Good Morning, ' + user;
    }
    else if (d >= 12 && d < 17) {
        h.innerHTML = 'Good Afternoon, ' + user;
    }
    else if(d >= 17 && d < 24){
        h.innerHTML = 'Good evening, ' + user;
    }

