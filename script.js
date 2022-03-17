/*
Javascript: the main logic of the game
*/

// Global vars and const related to game speed
var clueHoldTime = 1000;  // miliseconds to hold each button's light&sound
var cluePauseTime = 333;  // how long to pause in between buttons
const nextClueWaitTime = 1000;  // how long to wait before starting playback the next button-sequence

// Global vars to keep track of the state of the game
// TODO: EXTRA: randomly generate a pattern each time the game starts
var pattern = [1,2,3,4,5,4,6,1];  // secret pattern (the ints correspond to the 6 musical buttons)
var progress = 0;      // macroscopic: how far along the player is
var guessCounter = 0;  // microscopic: how far the player is
var gamePlaying = false;

var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0



/*
Helper function to generate a random int between 1 and n (inclusive)
*/
function randint(n) {
  return Math.ceil(Math.random() * 6)
}

/*
Start (a new round of) the game.
*/
function startGame() {
  
  /////// randomized `pattern` / the whole sequence
  for (let i=0; i<pattern.length; i++) {
    pattern[i] = randint(6);
  }
  
  progress = 0;
  gamePlaying = true;
  
  // swap the Start and Stop buttons (which are uniquely identified by their`id`)
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  
  console.log("Game starts");
  playButtonSequence();
}

/*
Stop the game.  
*/
function stopGame() {
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  console.log("Game ends");
  // alert("Game ends");  //???????heheheh
}


/*
Lights up a button (when computer plays the pattern)
*/
function lightButton(btn) {
  document.getElementById("button"+btn).classList.add("lit");
}
/*
Dims down a button (when computer plays the pottern)
*/
function dimButton(btn) {
  document.getElementById("button"+btn).classList.remove("lit");
}

/*
Play a single button
*/
function playButton(btn) {
  if (gamePlaying) {
    lightButton(btn);    // lights up the button...
    playTone(btn, clueHoldTime);  // play the tone for c secs
    setTimeout(dimButton, clueHoldTime, btn);  // dim down the button after c secs
    
    ///// Speed it up
    clueHoldTime /= 1.05;
    cluePauseTime /= 1.1;
  }
}

/*
The computer, playing a sequence of buttons 
*/
function playButtonSequence(){
  guessCounter = 0;
  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i = 0; i <= progress; i++){ // for each button that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playButton,delay,pattern[i]) // set a timeout to play that button
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}


/*
The user guess on the current sequence of buttons.

The game buttons are wired to this function (done in HTML). 
Ex. if we click button1, it will call guess(1)    
*/
function guess(btn) {
  
  console.log("User guessed: " + btn);
  
  if (!gamePlaying) return;
  
  // Guess correctly the current button in the sequence
  if (btn == pattern[guessCounter]) {
    // the user made their way through the current sequence (current guessCounter == overall progress)
    if (guessCounter == progress) {
      // Computer reveals the next sequence (if there are any new)...
      if (progress < pattern.length - 1) {
        progress++;
        playButtonSequence();
      }
      else { //... if the user completes all sequences, they win!
        winGame();
      }
    }
    // the user is still in the middle of the current sequence
    else {
      guessCounter++;
    }
  }
  
  else {  // Guess incorrectly
    loseGame();
  }
  
  
}



/*
If user wins the game
*/
function winGame() {
  stopGame();
  alert("Yeah, you won!");
}

/*
If user loses the game
*/
function loseGame() {
  stopGame();
  alert("Ooops! You lost.");
}





///////////////////////// Sound Synthesis Functions ///////////////////////
const freqMap = {  // TODO: change those to 6 chords
  1: 523.25,
  2: 698.46,
  3: 932.33,
  4: 622.25,
  5: 830.61,
  6: 783.99
}
/* Play the tone (for computer) */
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

/* Play the tone (as long as user holds the button) */
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}




// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)



// const btn = document.querySelector("button"); // Get the button from the page
// // Detect clicks on the button
// if (btn) {
//   btn.onclick = function() {
//     // The JS works in conjunction with the 'dipped' code in style.css
//     btn.classList.toggle("dipped");
//   };
// }

