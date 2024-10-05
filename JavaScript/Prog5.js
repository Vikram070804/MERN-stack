let collegeName="gnit college";
console.log(collegeName);
console.log(collegeName.toLowerCase());
console.log(collegeName.toUpperCase());
console.log(collegeName.length);


console.log(collegeName.includes("gnit"));
console.log(collegeName.includes("college"));
console.log(collegeName.repeat(2));

//Backtique:
console.log(`hi now i am studying in ${collegeName} `);

class Employee
{
    displayInfo()
    {
        console.log("hi this is display method")
    }
}
let emp=new Employee();
emp.displayInfo();