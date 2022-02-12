
//https://www.codewars.com/kata/576bb71bbbcf0951d5000044/solutions
//Given an array of integers.

//Return an array, where the first element is the count of positives numbers 
//and the second element is sum of negative numbers. 0 is neither positive nor negative.
//If the input array is empty or null, return an empty array.
let positiveCount= 0
let negativeNumber =0
let newArr= []
function countPositivesSumNegatives(input) {
    for( i = 0;i < input.length;i++){
            if (input[i] == 0){
             continue;
            }
            // Count positives
            else if (input[i] > 0) {
              positiveCount++;  
              console.log(positiveCount)   
            }
            // Sum negatives
            else if (input[i] < 0) {
              negativeNumber += input[i];
            
          }
          newArr.push(positiveNumber);
  newArr.push(negativeNumber);
  
  return newArr;
        
    }


    //return p
}
countPositivesSumNegatives([9,2,3,-1,-2,-3])