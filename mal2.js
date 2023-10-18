
class Student{

    constructor(name,yob){
        this.name = name;
        this.yob= yob;
    }
    name;
    yob;
    getAge =()=>{
        return new Date().getFullYear() - this.yob
    }
    getDetails(){
        return this
    }
    static printMinYob = (...args)=>{
        let arr = args.map(items=>items.yob)
        console.log(Math.max(...arr))
    }
}

let student1 = new Student("Rahul",2002)
let student2 = new Student("Sohail",2004)
let student3 = new Student("Mithali",2001)
// student1.name ="rahul"
// student1.yob =2002
//console.log(student1.getDetails())

// args is the rest parameter that compresses individual elements to iterables
// this works just opposite to the spread operator

// const printMinYob = (...args)=>{
//     let arr = args.map(items=>items.yob)
//     console.log(Math.max(...arr))
// }

//printMinYob(student1,student2,student3)

//instance functions are related objects created from class
// and static functions are related to the class itself and casnnot be accessed
// by the objects of the class

//Student.printMinYob(student1,student2,student3)


const arrowFun =()=>{
    let i =10
    console.log(this)
}

function normal(){
    let i =20
    console.log(this)
}
//arrowFun()
//normal()
a=arrowFun
//a()

function MyButton(name){

    console.log(name)

}
MyButton.prototype.onClick = function(fn){
    console.log(fn)
}
let obj1 = new MyButton('nived')

