

const items = [1,2,3,4]

// items.forEach((x)=>{
//     console.log(x,"bird")
// })

const fn1 = a => a*a
const returnObj= () => ({a:1,b:2})


const obj = {
    a:100,
    b:200,
    myFun:function(){
        // return( this.a + this.b)
        console.log(this)
    }
}

// let obj1 = obj.myFun
// console.log(obj1())


//context of a fucntion is the parent context and if no parent function then its the window function

obj.myFun = obj.myFun.bind(obj)
const a =obj.myFun
//a()

// bind ,call , apply : second arguement must be array


const function1 = ()=>{
    var a ={'value':10};
    function2(a)
    console.log('a',a.value)
}

const function2 = (b)=>{
    b.value+=1
    console.log('b',b.value)
}

//function1()

//stack and heap
// stack of an array gets cleared everytime a function returns or closes
// heap for bigger size data strcutures , passed by reference

const stack_memory = ()=>{
    let a ={
        value:10
    }
    stack_memory_2(2)
    console.log(a.value)
}

const stack_memory_2=(a)=>{

    a={
        value:30
    }
    console.log(a.value)
}
//stack_memory()

// stack -local variables , short lifetim
// heap -

var objs = [{name:'one','msg':'hey there'},{name:'two','msg':'hey father'}]

// objs.forEach((x)=>{
//     console.log(x.name,x.msg)
// })

//callbacks cannot have args

const outer = (a) =>{
    const inner = (b)=>{
        return a + b
    }
    return inner
}

//console.log(outer(10))
//console.log(outer(10)(20))

//  const xyz = ()=>{
//     console.log('hi')
//  }
//  console.log(xyz)


// when giving arguements to a function that executes on events closure can be used 
//- to fire the inner function only after the event happens

// let spreadObj = {a:1,b:2,c:3}

// let spread = {...spreadObj}

let obj_og = {a:1,
    b:2,
    c:['mittu','sittu']
}
let obj_dup = {...obj_og}

obj_og.c[0]="pinku"

//console.log(obj_og,obj_dup)

// when spread operator is used , a new object is created 
// shadow cloning

// const objectL = {name:"Rahul",age:12,place:"vadakara"}
// const {name,age,place} = objectL
// console.log(name)


//Renaming while destructuring objects

let objectDestruct ={name:"Das",age:30}
let objectDestruct2 ={name:"Dasan",age:32}

let {name:name1,age:age1} = objectDestruct2
//console.log(name1)

const arrayfuns = ['rahul','ramu','das']

let result =arrayfuns.find((x)=>{
    return x=='rahul'
})
// console.log(result)

const mapArr = [{name:"nived",age:12,place:"vadakara"},
                {name:"Akash",age:13,place:"calicut"},
                {name:"Rahul",age:14,place:"vadakara"}]

// let newArr = mapArr.map((x)=>{
//     return {...x,sub:"cs"}
// })
// console.log(newArr)

let newArr = mapArr.reduce((total,item)=>{

    return total+=1
    
},0)

//console.log(newArr)
