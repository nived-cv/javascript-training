

const regex1 = ()=>{

    //m - multiline , ?-optional , 

    //const reg = /[a-z]at/i;
    //const result = reg.test('Cat')

    //let regstart = /^cat/
    //let resstart = regstart.test('catist is')
    //let regex = /meat$/im        

    const regex = /^[a-z][a-z0-9_]*$/i          //pattern matching for staring with alphabets
    const test1 = `A`                           //and including only numbers and _
    let res = `MyName1.2_`
    return regex.test(res)
}

const regex2 = ()=>{

    const regex = /^Hel{2}o$/i;
    let pattern = 'Hello'
    return (regex.test(pattern))
}

const regex3 = ()=>{
    const regex = /^\d{1,2}-\d{1,2}$/i
    const expr = '23-10'
    return regex.test(expr)
}

// .match()- extract substring ,  returns array
// replace

const regex4 = ()=>{
    let expr = 'a-b-c'
    let res1 =  expr.replace(/-/g,':')   // g flag is global , change every instance
    let expr2 = '20-04-02'
    return expr2.replace(/(\d{2})$/,'20$1')
}


// lookahead ?=   look behind ?<=

const regex5 = ()=>{


}

console.log(regex4())


