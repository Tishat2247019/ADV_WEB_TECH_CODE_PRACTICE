//synchrouns js
console.log("Start");
setTimeout(()=>{
    for (let i = 0; i < 1000; i++)
        {
            var sum = 0;
            sum += i;
        }
        console.log(sum);
}, 2000)

console.log("End");
