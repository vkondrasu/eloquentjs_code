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

/*
  3. A list
*/

function arrayToList(ar){
  let list;
  list = {value:ar[0], rest: null};
  var temp = list;
  for (var i = 1; i < ar.length; i++){
    list.rest = {value:ar[i], rest:null};
    list = list.rest;
  }
  return temp;
}

function listToArray(list){
  var res = [];
  while(list != null){
    res.push(list.value);
    list = list.rest;    
  }  
  return res;
}

function prepend(val, li){
  var lis = {value:0, rest:undefined};
  lis.value = val;
  lis.rest = li;
  return lis;
}

function nth(list, index){
  var n = 0;
  while(n < index){
    list = list.rest;
    ++n;
  }
  
  return list.value;
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30, 40, 50, 60, 70, 80, 90, 123]), 1));
// → 20
