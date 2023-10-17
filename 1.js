

let num1=0,num2=0;
function increment(){

    // console.log('hey')
    var count = Number(document.getElementById('count').innerText);
    count+=1;
    document.getElementById('count').innerText=count;

}


const random = ()=>{
    num1 = Math.floor((Math.random() * (11-2)+2))
    num2 = Math.floor((Math.random() * (11-2))+2)
    sum()
}

const sum = ()=>{
    ssum = num1+num2;
    console.log(ssum)
}

