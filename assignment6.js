
function playWar() {
    let winningScore = 26;
    const player1 = new player();
    const player2 = new player();
  
    while(!haveWinner()) {
      player1.getCard();
      player2.getCard();
  
      console.log('\n');
      console.log('player1 card:', player1.card + 1);
      console.log('player2 card:', player2.card + 1);
  
      if (player1.card === player2.card) {
        console.log('tie round');
        continue;
      }
      if (player1.card > player2.card) {
        console.log('player1 scored');
        player1.score++;
        console.log("player ones score is now"  + " " + player1.score)
      } else {
        console.log('player2 scored');
        player2.score++;
        console.log("player twos score is now"  + " " + player2.score)
      }
    }
  
    console.log('\n');
    console.log('---- FINAL SCORES ----');
    console.log('player1:', player1.score);
    console.log('player2:', player2.score);
  
    const winner = player1.score > player2.score ? 'player1' : 'player2';
    console.log(winner, 'wins! ');
  
    function haveWinner() {
      return player1.score >= winningScore || player2.score >= winningScore;
    }
  }
  
  function player() {
    let deck = getShuffledDeck();
  
    return {
      getCard() {
        if (!deck.length) {
          deck = getShuffledDeck();
        }
        this.card = deck.pop();
      },
      score: 0,
      card: 0,
    }
  }
  
  function getShuffledDeck() {
    const deck = [...Array(4)].map(i => [...Array(13).keys()]).flat();
    return shuffle(deck);
  }
  
  function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5);
  }

  playWar()