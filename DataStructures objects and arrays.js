//1. The sum of a range

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
