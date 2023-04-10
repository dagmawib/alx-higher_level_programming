#!/usr/bin/node
const firstArg = process.argv[2];
if(firstArg = undefined){
    console.log("No arguments");
}
else{
    console.log(firstArg);
}