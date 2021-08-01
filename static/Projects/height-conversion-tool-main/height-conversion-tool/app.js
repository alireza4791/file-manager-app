const form = document.querySelector('#calculator');
const result = document.querySelector('#results');


form.addEventListener('submit',function (sub) {
    let feet = document.querySelector('#feet');
    let inches = document.querySelector('#inches');
    feet = parseInt(feet.value);
    inches = parseInt(inches.value);
    sub.preventDefault();
    if(isNaN(feet) || isNaN(inches)){
        result.innerHTML = 'Please Fill out both the feet and inches sections';
    }
    else if(feet < 0){
        result.innerHTML = 'Please Enter valid values for both the feet and inches sections';
    }
    else if(inches < 0 || inches >= 12){
        result.innerHTML = 'Please Enter valid values for both the feet and inches sections';
    }
    else {
        result.innerHTML = (feet * 30.48) + (inches * 2.54) + 'cm';
        document.querySelector('#feet').value = '';
        document.querySelector('#inches').value = '';
    }
})
