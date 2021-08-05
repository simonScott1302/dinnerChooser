"use strict";

function ourMeal() {
  const randomNum = Math.floor(Math.random(1) * 10);
  //   console.log(randomNum);
  switch (randomNum) {
    case 0:
      document.getElementById("result").innerHTML =
        "Tonights take away dinner is going to be Pizza!";
      break;
    case 1:
      document.getElementById("result").innerHTML =
        "Tonights take away dinner is going to be Indian!";
      break;
    case 2:
      document.getElementById("result").innerHTML =
        "Tonights take away dinner is going to be KFC!";
      break;
    case 3:
      document.getElementById("result").innerHTML =
        "Tonights take away dinner is going to be Greek!";
      break;
    case 4:
      document.getElementById("result").innerHTML =
        "Tonights take away dinner is going to be McDonalds!";
      break;
    case 5:
      document.getElementById("result").innerHTML =
        "Tonights take away dinner is going to be Kebab!";
      break;
    case 6:
      document.getElementById("result").innerHTML =
        "Tonights take away dinner is going to be Fish & Chips!";
      break;
    case 7:
      document.getElementById("result").innerHTML =
        "Tonights take away dinner is going to be Blues Smokehouse!";
      break;
    case 8:
      document.getElementById("result").innerHTML =
        "Tonights take away dinner is going to be GBK!";
      break;
    case 9:
      document.getElementById("result").innerHTML =
        "Tonights take away dinner is going to be Wagamama!";
      break;
  }
}
ourMeal();
