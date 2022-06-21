let alphabet = () => {
    let result = [];
    for (let i = 65; i <= 90; i++) {
        result.push(String.fromCharCode(i));
    }
    return result;
}   

console.log(alphabet());