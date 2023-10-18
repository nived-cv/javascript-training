
export let createButton=(name,fn) => {
        let btn = document.createElement('button')
        btn.innerText = name
        document.body.appendChild(btn)
        btn.onclick = fn

        return btn;
}

let btn1 = createButton('btn1',()=>{
    console.log('hi')
})

let btn2 = createButton('btn2',async()=>{

    let {addArray} = await import('./export.js');
    console.log(addArray([1,2,3]))
})

