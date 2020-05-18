
// const heroimages = document.getElementsByClassName("heroimage");
const heroimages = document.querySelectorAll('.heroimage');
const nextButton = document.getElementsByClassName('next');
const prevButton = document.getElementsByClassName('prev');
let counter =0;

console.log(heroimages);


nextButton[0].addEventListener('click', function (event) {
    console.log("next");
    counter++;
    if (counter > heroimages.length-1){
        counter = heroimages.length-1;
    }

    let moveto = -100 * counter;
    for (i = 0; i < heroimages.length; i++) {
        heroimages[i].style.transform = "translate(calc(" + String(moveto) + "%))  scale(1.0)";
        heroimages[i].style.transition = "0.5s ease-out";
    }
});

prevButton[0].addEventListener('click', function (event) {
    console.log("prev");
    counter--;
    if (counter < 0){
        counter = 0;
    }
    
    let moveto = -100 * counter;
    for (i = 0; i < heroimages.length; i++) {
        heroimages[i].style.transform = "translate(calc(" + String(moveto) + "%))  scale(1.0)";
        heroimages[i].style.transition = "0.5s ease-out";
    }
});



// heroimages[2].addEventListener('click', function (event) {
//     // do something
// console.log("back");
// heroimages[1].style.transform = "translate(calc(-100%))  scale(1.0)";
// heroimages[0].style.transform = "translate(calc(-100%))  scale(1.0)";
// heroimages[0].style.transition = "0.5s ease-out";
// heroimages[1].style.transition = "0.5s ease-out";
// heroimages[2].style.transform = "translate(calc(-100%))  scale(1.0)";
// heroimages[2].style.transition = "0.5s ease-out";
// }); it is too horrable.