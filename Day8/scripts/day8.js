// • Create class Employee *which has* instance member id, name , salary, net salary. 
//             *Also* Write getter setter for each instance member. 
//             Write calculate net salary function whose job is to calculate net salary 
//             after deduction of 10 % TDS. Create 2 objects of the class and call method.
//             

/*--------------------------------------class 1=------------------------------------------------------------*/ 
class Employee{
    constructor (){
        this.id=0;
        this.name="";
        this.salary=0;
        this.netSalary=0;
    }
    /**
     * @param {number} _id
     */
    set setid(_id){
        this.id=_id;
    }
    /**
     * @param {string} _name
     */
    set setname(_name){
        this.name=_name;
    }
    /**
     * @param {number} _salary
     */
    set setsalary(_salary){
        this.salary=_salary;
    }
    get getNetSalary(){
        return (this.salary-(this.salary*(0.1)));
    }
    get getId(){
        return this.id;
    }
    get getName(){
        return this.name;
    }
    get getSalary(){
        return this.salary;
    }
}

obj1 = new Employee();

/*-------------------------------------------------class 2----------------------------------------- */
/*Create class student *which has* instance member roll number, name, marks1,marks2,marks3, total, percentage.
Write getter setter for roll number, name and marks1,marks2,marks3.
Write a method to calculate total and  percentage.*/

class Student{
    constructor(){
        this.rollNumber=0;
        this.name="";
        this.marks1=0;
        this.marks2=0;
        this.marks3=0;
        this.total=0;
        this.percentage;
        this.outOf=300;
    }
    /**
     * @param {number} _rno
     */
    set setRollNumber(_rno){
        this.rollNumber=_rno;
    }
    /**
     * @param {string} _name
     */
    set setName(_name){
        this.name=_name;
    }
    /**
     * @param {number} _marks1
     */
    set setMarks1(_marks1){
        this.marks1=_marks1;
    }
    /**
     * @param {number} _marks2
     */
    set setMarks2(_marks2){
        this.marks2=_marks2;
    }
    /**
     * @param {number} _marks3
     */
    set setMarks3(_marks3){
        this.marks3=_marks3;
    }
    get getTotal(){
        this.total=parseInt(this.marks1)+parseInt(this.marks2)+parseInt(this.marks3);
        return this.total;
    }
    get getPercentage(){
        this.percentage=(this.total/this.outOf)*100;
        return this.percentage;

    }
    get getRollNumber(){
        return this.rollNumber;
    }
    get getName(){
        return this.name;
    }

    
}

obj2 = new Student();

/*----------------------------------------------functions------------------------------------------------------- */



function objCreate1() {
    let i1 = document.getElementById("eid1").value;
    let i2 = document.getElementById("eid2").value;
    let n1 = document.getElementById("ename1").value;
    let n2 = document.getElementById("ename2").value;
    let s1 = document.getElementById("esalary1").value;
    let s2 = document.getElementById("esalary2").value;

    emp1 = new Employee();
    emp2 = new Employee();

    emp1.setid = i1;
    emp1.setname = n1;
    emp1.setsalary = s1;

    emp2.setid = i2;
    emp2.setname = n2;
    emp2.setsalary = s2;
    
    document.getElementById("op1").innerHTML = 
    "<h4>Employee name : " + emp1.getName + 
    "<br>Employee Net-Salary : " + emp1.getNetSalary + "</h4><br>";

    document.getElementById("op2").innerHTML = 
    "<h4>Employee name : " + emp2.getName + 
    "<br>Employee Net-Salary : " + emp2.getNetSalary + "</h4><br>";
}

/*--------------------------------fun2--------------------------------------------- */

function objCreate2() {
    let rn1 = document.getElementById("srno").value;
    let n1 = document.getElementById("sname").value;
    let m1 = document.getElementById("smarks1").value;
    let m2 = document.getElementById("smarks2").value;
    let m3 = document.getElementById("smarks3").value;

    s1 = new Student();

    s1.setRollNumber = rn1;
    s1.setName = n1;
    s1.setMarks1 = m1;
    s1.setMarks2 = m2;
    s1.setMarks3 = m3;

    document.getElementById("op3").innerHTML = 
    "<h4>NAME : " + s1.getName + 
    "<br>Total : " + s1.getTotal +
    "<br>Percentage : " + s1.getPercentage
    "</h4>";
}