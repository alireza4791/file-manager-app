let x = 1
const timer = setInterval(function() {
  document.querySelector('#cook'+x).style.display = 'none';
  x++;
  if(x > 6){
    x = 1
  }
  document.querySelector('#cook'+x).style.display = 'block';

},5000);
