const readline = require("readline");

const rl = readline.createInterface(process.stdin, process.stdout);

rl.question("Please Enter your Name: ", (ans)=>{
    console.log("Hello " + ans);
    rl.close();
})