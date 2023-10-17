

const btn1 = document.getElementById('btn');
const clearbtn = document.getElementById('clear')
const list = document.getElementById('list');
const text = document.getElementById('text');
let msg=''


const startApp=()=>{                                                // runs on body onload
    let retrieved = localStorage.getItem('saved-items')             // retrieved the saved data and assigns to the global array
    items = JSON.parse(retrieved)
    items?render(items):items = []
    if(items)
    render(items)

}

clearbtn.addEventListener('click',()=>{
    text.value=""
    list.innerHTML=""
    items=[]
    localStorage.clear()
})

const getText = ()=>{
    items.push(text.value)
    text.value="";
    render(items)
}

const render = (items)=>{

    list.innerHTML=msg=""

    items.forEach((item)=>{
        msg+="<li>"+item+"</li>"
    })
   
    list.innerHTML=msg
    localStorage.setItem('saved-items',JSON.stringify(items)) // local storage always works with strings only
}

btn1.addEventListener("click",getText);

window.onload=(event)=>{
    startApp()
}
