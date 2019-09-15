// Global Variables

// Event Listeners
document.body.addEventListener('click', function(event) {
  event.preventDefault();
  if (event.target.classList.contains("play__btn--one")) {
    playGameFirstClick();
  }
  if (event.target.classList.contains("play__btn--two")) {
    playGameSecondClick();
  }
});

// Function for pushing input name values into header on page turn / Needs to be tied to a click event
function pushNameValuesOne() {
  var playerOneValue = document.querySelector(".player-one-input").value
  var playerTwoValue = document.querySelector(".player-two-input").value
  var headerNameInsert = document.querySelector(".page__two--header");
    headerNameInsert.innerText = `Welcome ${playerOneValue} and ${playerTwoValue}!`;
}

// Function for hiding page one content and summoning page two (attached to click event)
function displayPageTwo() {
  var pageOneContent = document.querySelector(".page__one--content");
  var pageTwoContent = document.querySelector(".page__two--content");
  var mainBackgroundOne = document.querySelector(".main__style--one");
    pageOneContent.style.display = "none";
    pageTwoContent.classList.remove("page__two--content");
    pageTwoContent.classList.add("page__two--reveal");
    mainBackgroundOne.classList.add("main__style--two");
    mainBackgroundOne.classList.remove("main__style--one");
}

// Clustered functions for click transition between page one and two (for event listener)
function playGameFirstClick() {
  var playerOneInput = document.querySelector(".player-one-input");
  var playerTwoInput = document.querySelector(".player-two-input");
    if (playerOneInput.value != "" && playerTwoInput.value != "") {
      pushNameValuesOne();
      displayPageTwo();
    } else {
      playerOneInput.classList.add("error-styling");
      document.querySelector(".left-label").innerText = "*Player 1 - Enter Name*"
      playerTwoInput.classList.add("error-styling");
      document.querySelector(".right-label").innerText = "*Player 2 - Enter Name*";
    }
}

// Invoked onkey event within input fields (page one)
function removeLeftErrorStyling() {
  var playerOneInput = document.querySelector(".player-one-input");
    if (playerOneInput.classList.contains("error-styling")) {
      playerOneInput.classList.remove("error-styling");
      document.querySelector(".left-label").innerText = "Player 1";
    }
}

function removeRightErrorStyling() {
  var playerTwoInput = document.querySelector(".player-two-input");
    if (playerTwoInput.classList.contains("error-styling")) {
      playerTwoInput.classList.remove("error-styling");
      document.querySelector(".right-label").innerText = "Player 2";
    }
}

// Function for hiding page two content and summoning page three (attached to click event)
function displayPageThree() {
  var pageThree = document.querySelector(".page__three--container");
  var pageTwoContentOne = document.querySelector(".page__two--reveal");
  var pageTwoContentTwo = document.querySelector(".main__style--two");
    pageTwoContentOne.style.display = "none";
    pageTwoContentTwo.classList.add("main__style--three");
    pageTwoContentTwo.classList.remove("main__style--two");
    pageThree.classList.add("page__three--reveal");
    pageThree.classList.remove("page__three--container");
}

// Function for pushing player names into their respective page three locations
function pushNameValuesTwo() {
  var playerOneValue = document.querySelector(".player-one-input").value
  var playerTwoValue = document.querySelector(".player-two-input").value
  var leftHeaderInsert = document.querySelector(".player__one--name");
  var rightHeaderInsert = document.querySelector(".player__two--name");
    leftHeaderInsert.innerText = `${playerOneValue}`;
    rightHeaderInsert.innerText = `${playerTwoValue}`;
}

// Clustered functions for click transition between page two and three (for event listener)
function playGameSecondClick() {
  displayPageThree();
  pushNameValuesTwo();
}
