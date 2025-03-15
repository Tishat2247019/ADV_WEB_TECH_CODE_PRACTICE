const prom = new Promise((resolve, reject)=>{
    let success = true;
    if (success){
        resolve("Done")
    }
    else{
        reject("Not Done");
    }
});
prom.then((message)=>console.log(message))
.catch((error)=>console.log(error));


let myprom = new Promise((resolve, reject)=>{
    let success = true;
    if (success){
        resolve("The task is done");
    }
    else{
        reject("The task is not done");
    }
});
myprom.then((message)=>
{
    console.log(message);
})
.catch((error)=>{
    console.log(error);
})