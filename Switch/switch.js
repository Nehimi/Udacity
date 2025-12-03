var tier = "nsfw deck";
var output = "You will receive "

switch (tier) {
  case "deck of legends":
    output += "a custom card, ";
  case "collector's deck":
    output += "a signed version of the Exploding Kittens deck, ";
  case "nsfw deck":
    output += "one copy of the NSFW (Not Safe for Work) Exploding Kittens card game and ";
  default:
    output += "one copy of the Exploding Kittens card game.";
}

console.log(output);

// Prints: You’ll receive one copy of the NSFW (Not Safe for Work) Exploding Kittens card game and one copy of the Exploding Kittens card game

var tiers = "none";
var outputs = "You will receive ";

switch (tiers) {
 
  default:
    outputs += "one copy of the Exploding Kittens card game.";
}

console.log(outputs);
// Prints: You’ll receive one copy of the Exploding Kittens card game.


var tier = "nsfw deck";
var output = "You will receive "

switch (tier) {
  case "deck of legends":
    output += "a custom card, ";
  case "collector's deck":
    output += "a signed version of the Exploding Kittens deck, ";
  case "nsfw deck": // <-- The switch finds a match here!
    output += "one copy of the NSFW (Not Safe for Work) Exploding Kittens card game and ";
  default: // <-- It then 'falls through' and executes the default block too.
    output += "one copy of the Exploding Kittens card game.";
}

console.log(output);