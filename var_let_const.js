var a = 100;
let b = 200;
{
    let b = 300;
    console.log(b);
    console.log(a);
}
function check(){
    var b = 300;
    console.log(b);
}

check();
console.log(b);

