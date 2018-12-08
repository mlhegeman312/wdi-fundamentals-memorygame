
var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  },
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];

var cardsInPlay = [];
var matchCounter = 0;

var reset = function () {
  for (var i = 0; i < cards.length; i++) {
    document.getElementsByTagName('img')[i].setAttribute('src', 'images/back.png');
  }
  cardsInPlay = [];
  matchCounter = 0;
};


function shuffle(array) {
  var currentIndex = array.length;
  var temporaryValue;
  var randomIndex;

 
  while (0 !== currentIndex) {

    
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


var checkForMatch = function () {
  if (cardsInPlay[0].rank === cardsInPlay[1].rank && cardsInPlay[0].suit === cardsInPlay[1].suit){
    //alert("You found a match!");
    matchCounter += 1;


    if (matchCounter === (cards.length / 2)) {
      alert("Congrats, You Win!");
      cards = shuffle(cards);
      reset();
    }

  } else {
    //alert("Sorry, try again.");
    reset();
  }
};


var flipCard = function () {
  var cardId = this.getAttribute('data-id');
  console.log("User flipped" + " " + cards[cardId].rank);

  if (cardsInPlay.length >= 2) {
    cardsInPlay = [];
  }

  cardsInPlay.push(cards[cardId]);
  this.setAttribute('src', cards[cardId].cardImage);
  if (cardsInPlay.length === 2) {
    setTimeout(checkForMatch, 200);
  }
};


var createBoard = function () {
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);

  }
}

//defines reset button
var button = document.getElementById('button');
button.addEventListener('click', reset);



createBoard();
