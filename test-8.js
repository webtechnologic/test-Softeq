let guessNumber = Math.floor(Math.random() * (1000000 - 1 + 1)) + 1;
let count = 0;

let verify = (n) => {
    let number = n;
    let randomNumber =  Math.floor(Math.random() * (1000000 - 1 + 1)) + 1;
    let result;
       
    if(count < 50){
        if (randomNumber === number) {
        result = 0; 
        } else if (randomNumber < number) {
        result = -1;
        } else if (randomNumber > number) {
        result = 1;
        }
        count++;
    }else{
        return 'Stop game';
    }    
    return result;
}      


for (let i = 0; i < 51; i++) {
    console.log(verify(guessNumber));
}