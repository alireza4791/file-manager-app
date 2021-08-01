document.querySelector('button').onclick =  
function(){
  document.body.style.background = 'linear-gradient(' + Math.floor(Math.random() * 360) + 'deg,' + 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')' + ' 0%,'+'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')'+ ' 100%)';
  }