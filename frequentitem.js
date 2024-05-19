arr = [ 
    1, 1, 3, 5, 7, 6, 8, 5, 6, 4, 
    7, 6, 0, 2, 1, 6, 8, 9, 5, 
]; 
  
arr.sort((a, b) => a - b); 
//console.log(arr) 
let count = 1, 
    max = 0, 
    el; 
  
for (let i = 1; i < arr.length; ++i) { 
    if (arr[i] === arr[i - 1]) { 
        count++; 
    } else { 
        count = 1; 
    } 
    if (count > max) { 
        max = count; 
        el = arr[i]; 
    } 
} 
console.log("The most occured element is: " + el);