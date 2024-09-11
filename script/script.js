
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
    this.remove
}



document.querySelectorAll("a").forEach(function test(tester){
    tester.addEventListener('click', essai)
    function essai(){
        console.log(this.innerText)
    }
})

document.querySelectorAll(".barres>div>div").forEach(function test(abracadabra){
    abracadabra.addEventListener('click', essai)
    function essai(){
        let nbMyst=parseInt((Math.random()*100)+1);
        this.style.height=nbMyst+"%";
    }
})

document.querySelectorAll('*').forEach(function(suppr){
    suppr.addEventListener('click', aller)
    function aller(event){
        event.stopPropagation()
        this.remove();
    }
})
