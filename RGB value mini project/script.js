let btn = document.querySelector("button");

function changeColour(){
    let red = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);

    let colour = `rgb(${red}, ${green}, ${blue})`;
    return colour;
}

btn.addEventListener("click", function(){
    let h1 = document.querySelector("h1");
    let div = document.querySelector("div");
    let changeColor = changeColour();
    h1.innerText = changeColor;
    div.style.backgroundColor = changeColor;

});

