


let fun1 = async()=>{
    let data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    data = await data.json()
    console.log(data)
}

//fun1()

let fun2 = async()=>{
    
    await fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(data=>data.json()
    .then((ob)=>{
        console.log(ob)
    }))
    .catch((e)=>{                       // works if any one of the .then gets failed
        console.log('oke')
    })
    
}

//fun2()

let rqstmulti=()=>{
    Promise.all([
        fetch('https://jsonplaceholder.typicode.com/todos/1').then(data=>data.json()),
        fetch('https://jsonplaceholder.typicode.com/todos/2').then(data=>data.json()),
        fetch('https://jsonplaceholder.typicode.com/todos/3').then(data=>data.json())
    ])
    .then((data)=>{
        console.log(data)
    })

}

//rqstmulti()

let dummyfun = ()=>{
    a=10
    return a
}
let dummyfun2 = ()=>{
    a=10
    return a
}

let tryfun = () =>{

    try{
        let a = dummyfun()
        console.log(a)
        throw('ente error')
    }
    catch(e){
        console.log(e)
    }
}

//tryfun()

const self_fun=()=>{
    let localVariable =10
    console.log(localVariable)
}

const self_fun_2=()=>{
    console.log(localVariable)
}

// script type = module makes functions and variables of global scope not accessible
// to other modules unless called by import and export
//self_fun_2()

