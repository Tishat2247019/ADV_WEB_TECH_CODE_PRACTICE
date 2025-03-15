const obj = {
    name : "tishat", 
    age : 22
}

console.log(obj);
for (let elem in obj){
    console.log(elem);
}



function calculate(a, b) {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;
  
    return [add, subtract, multiply, divide];
  }
  
  const [add, subtract, multiply, divide] = calculate(4, 7);
  console.log(add);
  console.log(divide);  
