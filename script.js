// Running function 10 times
let attempts = 0;

refresh();
function refresh() {
  // Generating hex values
  function colorsVal() {
    let hex = "ABCDEF0123456789";
    let res = "";
    for (let i = 1; i <= 6; i++) {
      res += hex.charAt(Math.floor(Math.random() * hex.length));
      // console.log(i);
    }
    return res;
  }

  // Setting the hex value for main question
  let ques = document.getElementById("hex-place");
  ques.innerText = `#${colorsVal()}`;

  // Giving the color values in the options

  let colorOptArr = [
    document.getElementsByClassName("bx1"),
    document.getElementsByClassName("bx2"),
    document.getElementsByClassName("bx3"),
    document.getElementsByClassName("bx4"),
  ];

  for (let i = 0; i < colorOptArr.length; i++) {
    // Getting the HTML Collection
    for (let j = 0; j < colorOptArr[i].length; j++) {
      // Getting the element from HTML collection
      colorOptArr[i][j].style.backgroundColor = `#${colorsVal()}`;
      colorOptArr[i][j].style.boxShadow = `none`;
    }
  }

  // Getting a random element for correct option
  function getRandBox() {
    let box = document.querySelectorAll(".colors");
    let randIndex;

    for (let i = 0; i <= box.length; i++) {
      randIndex = Math.floor(Math.random() * i);
    }
    let elem = box[randIndex];
    return elem;
  }

  // Setting a id to make the element different
  let correctColor = ques.innerText;
  getRandBox().setAttribute("id", "correct");

  // Getting the element for correct answer
  let correctOpt = document.getElementById("correct");

  // Giving the correct value to the option
  correctOpt.style.background = correctColor;
}

// Alert box after correct or incorrect answer
let alertBox = document.getElementById("alert-box");
let label = document.getElementById("label");

// User's answer
let score = 0;
function check(id) {
  // increasing the number of attempts done by user
  attempts += 1;

  if (id == "correct") {
    // Printing the result
    alertBox.style.opacity = 1;
    alertBox.style.display = "block";
    label.parentElement.style.background = "green";
    label.innerText = `Congratulations, You guessed it right!`;
    ++score;

    // Increasing the score of the user
    document.getElementById("score").innerText = `${score * 10}`;

    // GETTING VALUE DYNAMICALLY IN DOM
    let docName = document.getElementById('frmName');

    document.getElementById('nameRes').innerText = `${docName.value}, You have scored ${score * 10}/100`;

    // removing older ids
    let oldId = document.getElementById("correct");
    oldId.removeAttribute("id");

    // re-running the code
    setTimeout(() => {
      refresh();
    }, 1000);
  } else {
    // Printing the result
    alertBox.style.opacity = 1;
    alertBox.style.display = "block";
    label.parentElement.style.background = "red";
    label.innerText = `Sorry, You guessed it wrong!`;

    // GETTING VALUE DYNAMICALLY IN DOM
    let docName = document.getElementById('frmName');
    document.getElementById('nameRes').innerText = `${docName.value}, You have scored ${score * 10}/100`;

    // Showing correct answer
    document.getElementById(
      "correct"
    ).style.boxShadow = `#27ae60 0px 0px 0px 4px`;

    // removing older ids
    let oldId = document.getElementById("correct");
    oldId.removeAttribute("id");

    // Re-running the code
    setTimeout(() => {
      refresh();
    }, 1000);
  }

  // Adding attempts of the user performed
  document.getElementById("attempts").innerText = `${10 - attempts}`;

  if (attempts == 10) {
    let endRes = document.getElementById('endRes');
    endRes.style.display = 'block';
    endRes.style.opacity = 1;
  } else {
    return false;
  }
}

function hide() {
  alertBox.style.opacity = 0;
  alertBox.style.display = "none";
}

function again() {
  // Running again the game 
  refresh();
  score = 0;
  attempts = 0;
  document.getElementById("score").innerText = '0';
  document.getElementById("attempts").innerText = '10';

  alertBox.style.display = 'none';


  let endRes = document.getElementById('endRes');
  endRes.style.opacity = 0;
  
  setTimeout(() => {
    endRes.style.display = 'none';
  },500);
}