var add = (a,b,callback) => {
    let result = a+b;
    callback(result);
}
add(20,40,(result) => console.log(`Sum is ${result}`));
add(20,40,(result) => console.log(`Addition is ${result}`));
add(20,40,(result) => {
    result = result+result;
    console.log("Result after adding and adding itself "+result);
})