const h1 = document.querySelector("h1");
const btn = document.querySelector("button");
const loader = document.querySelector(".loader");

var grow = 0;

btn.addEventListener("click", function(){
    let random = Math.floor(Math.random() * 100)

    let int = setInterval(function(){
        grow++
        h1.innerHTML = grow+"%"
        loader.style.width = grow+"%"
        btn.style.pointerEvents = "none"
    },random)

     setTimeout(function(){
        clearInterval(int)
        btn.innerHTML = "Downloaded"
        h1.innerHTML = "Done!"
        btn.style.pointerEvents = "none"
     },random*100)
})