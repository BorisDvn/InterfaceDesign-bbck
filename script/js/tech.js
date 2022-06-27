let tempVertical;
let tempHorizontal;
let v;
let h;


window.addEventListener("resize", function() {

    console.log(v);
    console.log(h);
    tempVertical = document.getElementById("vertical");
    tempHorizontal = document.getElementById("horizontal");
    v = document.getElementById("vertical");
    h = document.getElementById("horizontal");
    if (window.matchMedia("(max-width: 1200px)").matches) {
        v.remove();
        h.remove();
    } else {
        console.log(tempVertical);
        console.log(tempHorizontal);
        v = tempVertical;
        h = tempHorizontal;
    }
})



function removeBySize() {

    tempVertical = document.getElementById("vertical");
    tempHorizontal = document.getElementById("horizontal");
    v = document.getElementById("vertical");
    h = document.getElementById("horizontal");
    if (innerWidth < 1200) {
        [...document.getElementsByClassName('vertical')].map(n => n && n.remove());
        [...document.getElementsByClassName('horizontal')].map(n => n && n.remove());
    }
}

removeBySize()