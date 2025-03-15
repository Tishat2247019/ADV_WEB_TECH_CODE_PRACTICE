function grand_pa(name, father){
    console.log(`${name}'s  father name is ${father}`);
}

function own_name(name, father, callback){
    console.log("Your name is ", name);
    callback(name, father );
}

own_name("tishat", "Afaz Uddin", grand_pa);


setTimeout(()=>{
console.log("hello world")
}, 5000);

setTimeout(() => {
own_name("tishat", "fasim Uddin", grand_pa);
}, 2000);