
const function1 = ()=>{

    // let man = "james"

    // msg = `hey `+man + ` how are you`
    // return msg

    let leads = ['hey']
    localStorage.setItem("item",leads)

    return leads
}

//console.log(function1())

// let arr1 = []
// arr1.push(10)
// console.log(arr1)

let literalFun=()=>{
    let rs = 20 
    let literal = `some one is ${10 +12}`
    let literal2 = `the pen is ${rs} rs`
    return literal2
}
console.log(literalFun())

