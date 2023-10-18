

const regex1 = ()=>{

    //m - multiline , ?-optional , 

    //const reg = /[a-z]at/i;
    //const result = reg.test('Cat')

    //let regstart = /^cat/
    //let resstart = regstart.test('catist is')
    //let regex = /meat$/im        

    const regex = /^[a-z]*/i
    const test1 = `A`
    let res = `MyName12_`
    return regex.test(res)
}

console.log(regex1())


