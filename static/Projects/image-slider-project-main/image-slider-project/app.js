let array = ['url(images/image1.png)','url(images/image2.png)','url(images/image3.png)','url(images/image4.png)'];
const canvas = document.querySelector('#canvas');
const right = document.querySelector('#right');
const left = document.querySelector('#left');
let i = 0;

canvas.style.backgroundImage = `${array[i]}`;

right.onclick = () => {
    ++i;
    if(i === 4){
        i = 0;
    }
    canvas.style.backgroundImage = `${array[i]}`;

};

left.onclick = () => {
    --i;
    if(i === -1){
        i = 3;
    }
    canvas.style.backgroundImage = `${array[i]}`;
};


