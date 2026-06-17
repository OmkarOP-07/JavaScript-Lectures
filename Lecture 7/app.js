// get attribute to get the attributes of the html tag
let div = document.querySelector("#box")

let attr = div.getAttribute("id")
console.log(attr)

let div2 = document.querySelector(".div2")
console.log(div2.getAttribute("name"))

//Set Attribute, to change the attribute names 
let para = document.querySelector("p")
para.setAttribute("class", "paragraph")
console.log(para.getAttribute("class"))

let box = document.querySelector(".box")
//box.style - return inline style 

box.style.backgroundColor = "yellow"
box.style.fontSize = "1.5rem"
box.style.fontFamily = "arial"

//div2.style.visibility = "hidden"

//insert element processs
//methods - 
// - append  {inside} at the end 
// - prepend {inside} at start
// - before  {outside} before the node
// - after   {outside} after the node

//1 create element 
//2 insert element
let newBtn = document.createElement("button")
newBtn.innerText = "Click me kid"

box.after(newBtn)


// node.remove - to remove element
// newBtn.remove()


// go and search 
// appendChild()
// removeChild()


// Q create a new box, text as "Tony stark", textColor = red, backgroundColor = "purple"
// insert it in body tag as firstelement 

// Q create a para, give styling through style.css, create new class and append it in tag through javascript

// when new class is added old one is overridden
// Learn new Concept - ClassList 
// Solve using this concept
