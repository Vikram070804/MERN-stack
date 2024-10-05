class Employee
{
    id=1001;
    ename="vinay kumar";
    displayInfo()
    {
        console.log(this.id+" "+this.ename);
    }
}
let emp=new Employee();
emp.displayInfo();

//For each
x=[10,20,30,40];
for(let i of x)
{
    console.log(i);
}