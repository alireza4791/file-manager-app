// document.querySelector('button').onclick =  
// function(){
//   document.querySelector('button').style.background = 'linear-gradient(' + Math.floor(Math.random() * 360) + 'deg,' + 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')' + ' 0%,'+'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')'+ ' 100%)';
//   }
let count = 1
let animal_info = document.querySelector('.animal-info')

document.querySelector('button').onclick = function()
{
  if(count == 3)
  {
  animal_info.innerHTML += '</br>'
  request = new XMLHttpRequest()
  request.open('GET', 'https://learnwebcode.github.io/json-example/animals-3.json')
  request.onload = function()
  {
  result = JSON.parse(request.responseText)
  renderhtml(result)
  }
  request.send()
  count++
  document.querySelector('button').style.display = 'none'
  }
  
  if(count == 2)
  {
  animal_info.innerHTML += '</br>'
  request = new XMLHttpRequest()
  request.open('GET', 'https://learnwebcode.github.io/json-example/animals-2.json')
  request.onload = function()
  {
  result = JSON.parse(request.responseText)
  renderhtml(result)
  }
  request.send()
  count++

  }
 
  if(count == 1){
    let request = new XMLHttpRequest()
    request.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json')
    request.onload = function()
      {
        let result = JSON.parse(request.responseText)
        renderhtml(result)
      }
        request.send()
        count++
      }
  
  }

function renderhtml(res){
  var i; 
  let html_string = ''
  for(i = 0; i < res.length; i++){
    html_string  += '<p>' + res[i].name + ' is a ' + res[i].species + ' and it likes ' + res[i].foods.likes + 
    ' and dislikes ' + res[i].foods.dislikes + '</br></br></p>'
  }
  animal_info.insertAdjacentHTML('beforeend',html_string)
}