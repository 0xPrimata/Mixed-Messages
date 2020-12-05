const fetch = require('node-fetch');
const Markov = require('js-markov');
var markov = new Markov();

let phrases = []
async function markovedQuote(){
    for (let i=0; i<5; i++){
    await fetch("https://api.quotable.io/random")
  .then(function(data) {
         return data.json();
    })
    .then(function(data){
    phrases.push(data.content);
   })
 .catch(function(err) {
    console.log(err); 
    })
    }
    markov.addStates(phrases);
    markov.train();
    console.log(markov.generateRandom(100));
}

markovedQuote()