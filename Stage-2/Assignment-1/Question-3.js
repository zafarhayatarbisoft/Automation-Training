/*Write a console based application. Declare a class Student. Declare its private data 
members as studentName, studentRegistrationNo, batchName. Write getter and setter 
for these data members. Set and Get the values using these Properties. Use this keyword 
while setting the values.*/


class Student{ // class student
    constructor(studentName, studentRegistrationNo,batchName){
        this.setname= studentName;
        this.setid= studentRegistrationNo;
        this.setbatch= batchName;
    }
    //getter setter for studentname
    getName(){
        return this.studentName;
    }
    setname(newName){
        newName= newName.trim();
        if(newName===''){
            throw 'Enter student Name'
        }
        this.studentName = newName;
    }
    //getter setter for id 
    getId(){
        return this.studentRegistrationNo;
    }
    setid(newId){
        newId= newId.trim();
        if(newId===''){
            throw 'student id here'
        }
        this.studentRegistrationNo = newId;
    }
    
    //getter setter for batch
    getbatch(){
        return this.batchName;
    }
    setbatch(newBatch){
        newBatch = newBatch.trim();
        if(newBatch===''){
            throw 'Eneter student batch'
        }
        this.batchName = newBatch;
    }
    
     }
    let studnetinfo = new Student('zafar hayat','20','december');
    console.log(studnetinfo); 
    
    
    