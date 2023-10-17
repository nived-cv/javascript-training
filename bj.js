

const start = ()=>{

    const cards = random()
    document.getElementById('text-msg').innerText=`cards are ${cards[0]} ${cards[1]}`
    msg = compare(cards[0],cards[1])?'less than 10 , you loose':'you win';
    console.log(msg)
    document.getElementsByClassName('result')[0].innerText = msg;
}

const random = ()=>{

    const num1 = Math.ceil(Math.random()*10)
    const num2 = Math.ceil(Math.random()*10)
    return [num1,num2]
}
const compare= (num1 , num2)=>{
    if(num1+num2<10)
    return true
    return false

}