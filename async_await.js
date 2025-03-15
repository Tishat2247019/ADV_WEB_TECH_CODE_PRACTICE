console.log("First");
async function a(){
    await new Promise((resolve)=>{
        let sum = 0;
        for (let i = 0; i < 1000000; i++)
        {
            sum += i;
        }
        console.log(sum);
        resolve();
    })
}
a();
console.log("Last")

console.log("First");
async function a(){
    new Promise((resolve)=>{
        let sum = 0;
        for (let i = 0; i < 10000000; i++)
        {
            sum += i;
        }
        console.log(sum);
        resolve();
    })
}
a();
console.log("Last")