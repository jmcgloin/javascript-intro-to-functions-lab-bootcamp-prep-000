let shout = (exclaim) => exclaim.toUpperCase();
let whisper = (shh) => shh.toLowerCase();
let logShout = (exclaim) => console.log(exclaim.toUpperCase());
let logWhisper = (shh) => console.log(whisper(shh));
let sayHiToGrandma = (hiGrammy) => {
  if ( hiGrammy === "I love you, Grandma." ) {
    return "I love you, too."
  } else if ( hiGrammy.isLowerCase() ) {
    return "I can't hear you!";
  } else if ( hiGrammy.isUpperCase() ) {
    return "YES INDEED!";
  } 
}