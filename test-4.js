let arr = ['1', 'a', '25', '13.1'];

let stringList = () => {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = Number(arr[i]);
    if(Number.isInteger(sum)){ result += sum};
  }       
    return result; 
}

console.log(stringList (arr));