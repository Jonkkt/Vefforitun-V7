/**
 * Verkefni 7 – Gisk leikur
 *
 * Leikur sem snýst um að giska á tölu milli 0 og 100
 */


/**
 * Global fylki sem geymir fjölda ágiskana í leikjum
 * Ef fylki er tómt hefur enginn leikur verið spilaður.
 * Ef fylki er [2, 3] hafa verið spilaðir tveir leikir þar sem:
 *  - Fyrsti leikur kláraðist í tveim ágiskunum.
 *  - Seinni leikur kláraðist í þrem ágiskunum.
 */

 const games = [];
 
/**
 * Spilar play() svo lengi sem kveikt er á forritinu eða haldið áfram að spila.
 */
 
function start() {
  alert('Þetta er leikur sem snýst um að gíska á tölu frá 0 til 100');
  play();
  
}

/**
 * Skilgreinir hlutina sem forritið þarf til þess að virka og geta keyrt.
 */
function play() {
 const random = randomNumber(1,100);
 const guess = 0;
 const rett = false;
 const attempts = 0;

 getResults(guess, random, rett, attempts);
}

/**
 * Tekur á móti input sem sagt tölu fyrir guess.
 * Athugar hvort guess er tala eða ekki.
 * Athugar hvort guess er jafnt og correct og telur hversu mörg attempt það tekur.
 */
function getResults(guess, correct, rett, attempts){
  
  do {
    guess = parseInt(prompt('Giskaðu á tölu á milli 0 - 100'));
   if(guess === null){
     playAgain(guess);
   }else if (guess != Number(guess)) {
      isNaN(guess)
      alert('Ekki Tala!');
   } else if (guess < 0){
   alert('Ekki rétt');
   }else if (guess == correct) {
    rett = true;
   alert('rétt');
  }else if (Math.abs(correct - guess) < 5) {
   alert('Mjög nálægt');
  } else if (Math.abs(correct - guess) < 10) {
   alert('Nálægt');
  } else if (Math.abs(correct - guess) < 20) {
    alert('Frekar langt frá');
  } else if (Math.abs(correct - guess) < 50) {
    alert('Langt frá');
  } else {
    alert('Mjög langt frá');
  }
  attempts++;
  
} while (rett == false);
Games = games.push(attempts);
playAgain(attempts);

}
/**
 * Spyr notanda hvort hann vill spila aftur.
 * Ef ekki er spilað aftur þá reiknar það út hversu marga leiki var spilað og meðalfjöldi ágíska.
 */
function playAgain(){
const playAgain = confirm('Viltu spila annan leik');

if (playAgain == true) {
  play();
} else{
  alert('Þú spilaðir ' + games.length + ' leiki \n' + 'Meðalfjöldi ágískana var ' + (games.reduce((a,b) => a + b, 0)/games.length).toFixed(2));
}
}





/**
 * Skilar tölu af handahófi á bilinu [min, max]
 */
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Byrjar leik
start();
