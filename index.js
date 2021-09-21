//given an array of integers which represent the pins that have been knocked over where the pattern for 
//I I I I
// I I I
//  I I
//   I

//is 

//7 8 9 10
// 4 5 6
//  2 3
//   1

//retun the new pins. where \n is the end of the line

function bowlingPins(arr){
 let row1 = "";
 let row2 = "";
 let row3 = " ";
 let row4 = "  ";
  
  if(arr.includes(7)){
    row1 += " "
  }
  else if(!arr.includes(7)){
    row1 += "I"
  }
  for(let i=8; i<=10; i++){
    if(arr.includes(i)){
      row1 += "  ";
    }
     else{
       row1 += " I"
     }
  }
  
  for(let i=4; i<=6; i++){
    if(arr.includes(i)){
      row2 += "  "
    } else{
      row2 += " I"
    }
  }
  
  for(let i=2; i<=3; i++){
    if(arr.includes(i)){
      row3 += "  "
    } else{
      row3 += " I"
    }
  }
 
  
  if(arr.includes(1)){
    row4 += " "
  }
  else if(!arr.includes(1)){
    row4 += "I"
  }
 
  return `${row1}\n${row2} \n${row3}  \n ${row4}   `
}

//a more elegant solution

// var bowlingPins = a => {
//   var i = n => a.includes(n) ? ' ' : 'I'
//   return `${i(7)} ${i(8)} ${i(9)} ${i(10)}\n ${i(4)} ${i(5)} ${i(6)} \n  ${i(2)} ${i(3)}  \n   ${i(1)}   `
// }

console.log(bowlingPins([1]));
console.log(bowlingPins([10]))
console.log(bowlingPins([1, 2, 3, 4]))