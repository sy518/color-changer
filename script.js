let colors = ["skyblue", " gray", "peach", "pink", "olive", "mustard", "coral", "tan", "brown", "teal"];
let button = document.getElementById("clickButton");
button.addEventListener("click", function () {
    let randomColor = colors[Math.floor(Math.random() * colors.length)]
    console.log(randomColor);
    
    document.body.style.background = randomColor;
    console.log(randomColor);



})




