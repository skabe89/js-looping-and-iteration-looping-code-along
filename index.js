// Code your solutions in this file

function writeCards(names){
  let thankYou = []
  for(let i = 0; i < names.length; i += 1){
    thankYou.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
  }
  return thankYou
}


function countDown(number){
  while (number >= 0){
    console.log(number)
    number --
  }
}