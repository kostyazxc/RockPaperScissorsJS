let x = document.getElementById('text');
function Start() {
  let selection = ['Rock', 'Paper', 'Scissors'];
  const randomValue = selection[Math.floor(selection.length * Math.random())];

  let prom = prompt('Rock,Paper,Scissors:');
  alert(`AI chooses: ${randomValue}`);

  //Rock
  if (prom == 'Rock' && randomValue == 'Rock') {
    document.getElementById('text').style.color = 'Grey';
    document.getElementById('text').innerHTML = 'Draw!';
  } else if (prom == 'Rock' && randomValue == 'Paper') {
    document.getElementById('text').style.color = 'Red';
    document.getElementById('text').innerHTML = 'You lost,Paper beats Rock';
  } else if (prom == 'Rock' && randomValue == 'Scissors') {
    document.getElementById('text').style.color = 'Green';
    document.getElementById('text').innerHTML =
      'Congrats,you won, Rock beats Scissors!';
    //Paper
  } else if (prom == 'Paper' && randomValue == 'Rock') {
    document.getElementById('text').style.color = 'Green';
    document.getElementById('text').innerHTML =
      'Congrats,you won, Paper beats Rock!';
  } else if (prom == 'Paper' && randomValue == 'Paper') {
    document.getElementById('text').style.color = 'Grey';
    document.getElementById('text').innerHTML = 'Draw!';
  } else if (prom == 'Paper' && randomValue == 'Scissors') {
    document.getElementById('text').style.color = 'Red';
    document.getElementById('text').innerHTML = 'You lost,Scissors beat Paper!';
  }
  //Scissors
  else if (prom == 'Scissors' && randomValue == 'Rock') {
    document.getElementById('text').style.color = 'Red';
    document.getElementById('text').innerHTML = 'You lost,Rock beats Scissors';
  } else if (prom == 'Scissors' && randomValue == 'Paper') {
    document.getElementById('text').style.color = 'Green';
    document.getElementById('text').innerHTML = 'You won, Scissors beat Paper';
  } else if (prom == 'Scissors' && randomValue == 'Scissors') {
    document.getElementById('text').style.color = 'Grey';
    document.getElementById('text').innerHTML = 'Draw';
  }
}
