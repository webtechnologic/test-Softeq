const verify = (guessNumber) => {
    let arr = [];
    for (let i = 0; i <= 1000000; i++) {
        arr.push(i);
    }
    let start = 0;
    let end = arr.length;
    let pivot = Math.floor((start + end) / 2);
    let attempts = 0;
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[pivot] !== guessNumber) {
        if (guessNumber < arr[pivot]) end = pivot;
        else start = pivot;
        pivot = Math.floor((start + end) / 2);
        attempts++;
        if(arr[pivot] === guessNumber) {result = 0;
        } else if (arr[pivot] < guessNumber) {result = -1}  
        else result = 1;   

        };
        console.log(result);
      
        if (arr[pivot] === guessNumber) return `Found: ${guessNumber} in ${attempts} attempts`;
    };
  
    return 'Nothing Found';
};
  
console.log(verify(777777));  