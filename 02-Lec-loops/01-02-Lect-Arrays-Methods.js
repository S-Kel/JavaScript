// Delete Array Elements 

/* 1. Method: delete(arra[index])
      Return the old array 
*/
let arr = ['a', 'b', 'c', 'd'];
delete(arr[1]);
arr_del = arr;

/* 2. Method: .splice(index, element)
      Return the array without the removed element  
*/
arr.splice(1, 1);
let arr_splice = arr;

/* 2. Method: .join('')
      Return the array without the removed element  
*/

// Display Results 
console.log(arr_del);
console.log(arr_splice);
console.log(arr.join(' '));