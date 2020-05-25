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
    get netSal(){
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
        this.total=this.marks1+this.marks2+this.marks3;
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