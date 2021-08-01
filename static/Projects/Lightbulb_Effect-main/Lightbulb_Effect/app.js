let bulb = document.querySelector('#bulb');
bulb.onclick = function () {
    if(bulb.className == 'bulb-off'){
    bulb.className = 'bulb-on';
    }
    else if(bulb.className == 'bulb-on'){
        bulb.className = 'bulb-off';
    }

}