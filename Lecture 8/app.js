// https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events

// The change in the state of an object is known as an Event
// Events are fired to notify code of "interesting changes" that may affect code execution.

// Mouse events (click, double click etc.)
// Keyboard events (keypress, keyup, keydown)
// Form events (submit etc.)
// Print event & many more

// To react to an event, you attach an event listener to it

const btn = document.querySelector("button");
const colors = [
    "red",
    "blue",
    "yellow",
    "green",
    "orange",
    "purple",
    "pink",
    "brown",
    "black",
    "white"
];

let lastNumber = null;

function random() {
    let newNumber;

    // Keep generating if the new number matches the last one
    do {
        newNumber = Math.floor(Math.random() * 10) + 1;
    } while (newNumber === lastNumber);

    // Save the current number for the next turn
    lastNumber = newNumber;
    console.log(lastNumber)
    return newNumber;
}

btn.addEventListener("click", () => {
    document.body.style.backgroundColor = colors[random()];
});

// onclick - html me dekho 

// event handlling in js
let btn4 = document.querySelector("#btn4")

btn4.onclick = () => {
    console.log("btn 4 clicked")
};

// priority to js event not inline event

//                               handler (callback function)
// node.addEventListener( event, callback )
btn5.addEventListener("click", () => {
    console.log("Button 5 clicked by function 1")
})

btn5.addEventListener("click", () => {
    console.log("Button 5 clicked by function 2")
})

const fun3 = () => {
    console.log("Button 5 clicked by function 3")
}

btn5.addEventListener("click",fun3)

btn5.addEventListener("click", () => {
    console.log("Button 5 clicked by function 4")
})

// node.removeEventListener( event, callback )
btn5.removeEventListener("click", fun3)

// *Note : the callback reference should be same to remove

// Create mode changer button dark bright theme