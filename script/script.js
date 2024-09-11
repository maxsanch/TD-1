
document.querySelector("h1>span").addEventListener('click', chat)

function chat(event){
    console.log(event)
    console.log(this.innerText)
}


document.querySelector("h1").addEventListener('click', air)

function air(){
    console.log('i am atomique')
}

document.querySelector('.gros').addEventListener('click', balise)

function balise(){
    console.log(this.innerText)
}

window.addEventListener('click', oui)

function oui(event){
    let posiX = event.pageX || event.changedTouches[0].pageX;
    document.querySelector('.gros').innerHTML = posiX
}

