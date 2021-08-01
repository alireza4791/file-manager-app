"use strict";

var x = 1;
var timer = setInterval(function () {
  document.querySelector('#cook' + x).style.display = 'none';
  x++;
  document.querySelector('#cook' + x).style.display = 'block';

  if (x === 6) {
    x = 1;
    var y = setInterval(function () {
      document.querySelector('#cook' + x).style.display = 'block';
    }, 5000);
  }
}, 5000);