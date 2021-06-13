let userScore = 0;
let computerScore = 0;
const userScoreSpan = document.getElementById('user-s');
const computerScoreSpan = document.getElementById('comp-s');
const resultP = document.querySelector('.result > p');
const rock = document.getElementById('r');
const paper = document.getElementById('p');
const scissor = document.getElementById('s');

function lettertoword(letter) {
  if (letter === "r") return "Rock" ;
}

function main() {
  rock.addEventListener('click',function() {
    game("r");
  })
  paper.addEventListener('click',function() {
    game("p");
  })
  scissor.addEventListener('click',function() {
    game("s");
  })
}
