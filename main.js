// Global Variables
var cards = [];

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

// Function for all 10 card flips - invoked via respective onClick events in HTML
var clickCounter = 0;
function flipRespectiveCard() {
    if (clickCounter < 2) {
        if (event.target.classList.contains('rotation-one')) {
            event.target.innerHTML = '<img src="images/bey1.jpg" class="card-img" alt="Image of Beyonce">';
            clickCounter++;
        }
        if (event.target.classList.contains('large__two--cell')) {
              event.target.innerHTML = '<img src="images/bey1.jpg" class="card-img" alt="Image of Beyonce">';
              clickCounter++;
        }
        if (event.target.classList.contains('rotation-three')) {
              event.target.innerHTML = '<img src="images/bey2.jpg" class="card-img" alt="Image of Beyonce">';
              clickCounter++;
        }
        if (event.target.classList.contains('rotation-four')) {
              event.target.innerHTML = '<img src="images/bey2.jpg" class="card-img" alt="Image of Beyonce">';
              clickCounter++;
        }
        if (event.target.classList.contains('rotation-five')) {
              event.target.innerHTML = '<img src="images/bey3.jpeg" class="card-img" alt="Image of Beyonce">';
              clickCounter++;
        }
        if (event.target.classList.contains('rotation-six')) {
              event.target.innerHTML = '<img src="images/bey3.jpeg" class="card-img" alt="Image of Beyonce">';
              clickCounter++;
        }
        if (event.target.classList.contains('rotation-seven')) {
              event.target.innerHTML = '<img src="images/bey4.jpg" class="card-img" alt="Image of Beyonce">';
              clickCounter++;
        }
        if (event.target.classList.contains('rotation-eight')) {
              event.target.innerHTML = '<img src="images/bey4.jpg" class="card-img" alt="Image of Beyonce">';
              clickCounter++;
        }
        if (event.target.classList.contains('large__nine--cell')) {
              event.target.innerHTML = '<img src="images/bey5.jpg" class="card-img" alt="Image of Beyonce">';
              clickCounter++;
        }
        if (event.target.classList.contains('rotation-ten')) {
              event.target.innerHTML = '<img src="images/bey5.jpg" class="card-img" alt="Image of Beyonce">';
              clickCounter++;
        }
    }
    reverseFlipCard();
}

// Function for reversing the card flip (invoked within intial flip function that is called onclick)
function reverseFlipCard() {
    if (event.target.classList.contains('card-img')) {
        event.target.style.display = "none";
        event.target.parentElement.innerText = 'B';
        clickCounter--;
    }
}

// Function for instantiating cards and pushing them as array of objects into a new Deck (as a property) on page two click
function instantiateCards() {
    var cardsNodeList = document.querySelectorAll('div.small__cell--styling, div.large__two--cell, div.large__nine--cell');
        for (var i = 0; i < cardsNodeList.length; i++) {
            var cardInstance = new Card(cardsNodeList[i].dataset.matchinfo);
            cards.push(cardInstance);
        }
    deck1 = new Deck(cards);
}

// Function invocation on page load - generating a Deck instance loaded with a single property with the value of an array of the Card objects
instantiateCards();
console.log(deck1);
