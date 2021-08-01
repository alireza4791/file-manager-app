"use strict";

function game_state() {
  var playing = false;
  document.querySelector(".timer").style.display = "block";
  var count = document.querySelector("#seconds");
  var x = 60;
  count.innerHTML = x;
  var rando_1 = Math.round(Math.random() * 10);
  var rando_2 = Math.round(Math.random() * 10);
  var rando_3 = 0;
  var rando_4 = 0;
  var box_counter = 0;
  var success_box = 0;
  var un_selected_box = Math.floor(Math.random() * 4) + 1;
  var selected_box = Math.floor(Math.random() * 4) + 1;

  if (playing === false) {
    document.querySelector(".start").innerHTML = "Reset Game";
    var counter = setInterval(function () {
      x--;
      count.innerHTML = x;
    }, 1000);
    document.querySelector(".question_box").innerHTML = rando_1 + "x" + rando_2; // checking to see if all boxes are filled and one of them has the correct answer

    while (success_box != 1 && box_counter <= 3) {
      //creating a random number by multiplying 2 random numbers between 1 and 10
      rando_3 = Math.round(Math.random() * 10) * Math.round(Math.random() * 10); //checking to see if the random number is the correct answer

      if (rando_1 * rando_2 == rando_3) {
        //generating a random number between 1 & 4 to to store the result in that box's number
        selected_box = Math.floor(Math.random() * 4) + 1;

        if (selected_box == 1) {
          document.querySelector("#box_1").innerHTML = rando_3;
        } else if (selected_box == 2) {
          document.querySelector("#box_2").innerHTML = rando_3;
        } else if (selected_box == 3) {
          document.querySelector("#box_3").innerHTML = rando_3;
        } else if (selected_box == 4) {
          document.querySelector("#box_4").innerHTML = rando_3;
        }

        success_box++;
      } //checking to see of un-selected box(remaining boxes) is/ are the same as selected box


      while (un_selected_box == selected_box) {
        un_selected_box = Math.floor(Math.random() * 4) + 1;
      } //when the boxes with the wrong answers arent taking the same spot as the box with the correct answer


      rando_4 = Math.round(Math.random() * 10) * Math.round(Math.random() * 10);

      if (un_selected_box == 1) {
        document.querySelector("#box_1").innerHTML = rando_4;
      } else if (un_selected_box == 2) {
        document.querySelector("#box_2").innerHTML = rando_4;
      } else if (un_selected_box == 3) {
        document.querySelector("#box_3").innerHTML = rando_4;
      } else if (un_selected_box == 4) {
        document.querySelector("#box_4").innerHTML = rando_4;
      }

      box_counter++;
      console.log(un_selected_box); // console.log(selected_box);
    }

    playing = true;
  } else if (playing === true) {// document.querySelector(".start").innerHTML = "Start Game";
    // playing = false;
  }
}