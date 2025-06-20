//  RACTICE QUECTIONS 

// create a new button element. give it a text "click me", bacjgrond color of red and text color of white.
// insert the button as the first element inside the body tag

let newBtn = document.createElement("button")
newBtn.innerText="click me";

newBtn.style.color = "white";
newBtn.style.backgroundColor = "red";

document.querySelector("body").append(newBtn);

// create a paragraph tag in html, give it a class and some styling.
// now create a new class in css and try to append this class to the <p> element