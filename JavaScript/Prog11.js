function displayInfo()
{
    console.log("hi this is display function")
}
displayInfo();


const displayInfo1=()=>//function definition
{
    console.log("hi this is display1 function");
}
displayInfo1();//function calling

x=()=> console.log("ajdv")
x()

function rest(...args){
    let result=0;
    for(let arg of args)
    {
        result=result+arg;
    }
    console.log("the final result is="+result)
}
rest(10,20,30,40,50);

const arr=["one","two","three"];
const newArray=["four",...arr];
console.log(newArray);
