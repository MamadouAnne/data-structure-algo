'use strict';

// function charCount(str){
//    var result = {};
//   for ( var char of str){
//             char = char.toLowerCase();
//        if (/[a-z0-9]/.test(char)){
//       result[char] = ++result[char] || 1;
//      }
//    }
//        return result;
// }

function charCount(str){
   var result = {};
  for ( var char of str){
            char.toLowerCase()
       if (/[a-z0-9]/.test(char)){
       if (result[char] > 0){
            result[char]++;
       }
       else {
            result[char] = 1;
       }
     };
   }
       return result;
}

console.log(charCount('Mamadou'));