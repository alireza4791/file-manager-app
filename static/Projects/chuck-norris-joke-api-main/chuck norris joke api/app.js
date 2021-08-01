const joke = document.querySelector('#display-joke');
const btn = document.querySelector('#get-joke');

btn.onclick = function () {
    let request = new XMLHttpRequest();
    request.open('GET','https://api.chucknorris.io/jokes/random')
    request.onload = function () {
        let data = JSON.parse(request.responseText);
        console.log(data)
        renderHTML(data);
    }
    request.send();
}
function renderHTML(data) {
    joke.innerHTML = data.value;

}