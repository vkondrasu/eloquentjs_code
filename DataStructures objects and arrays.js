/*
  1. The sum of a range
*/

function range(start, end, step){
  var res = [];
  if(step === undefined) step = 1;
  
  if(step < 0){
    for(var i = start; i>= end; i+=step){
      res.push(i);
    }
  }
    else{
      for(var i = start; i<= end; i+=step){
      res.push(i);
    }
     
  }
  return res; 
}

function sum(numbers){
  var s = 0;
  for(var i = 0; i< numbers.length; i++){
    s += numbers[i];    
  }
  return s;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55


/*
  2. Reversing an array
*/

function reverseArray(ar){
  var result = [];
  for(var i = ar.length -1; i >=0; i--){
    result.push(ar[i]);
  }
  return result;
}

function reverseArrayInPlace(ar){
  var temp;
  for(var i = 0, j = ar.length -1; i<j; i++,j--){
    temp = ar[i];
    ar[i]  = ar[j];
    ar[j] = temp;
  }
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
