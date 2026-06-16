// Document Object Model

console.log(window)  //object created by browser 

console.dir(document.body)
console.log(window.document.body)
console.log(document.head)


//Childnodes
console.log(document.body.childNodes)

console.log(document.body.childNodes[2])

document.body.style.backgroundColor = "red"

document.body.childNodes[1].innerText = "abcd"

// access by id, class, tag

let heading1 = document.getElementById("heading")
console.dir(heading1)

let heading2 = document.getElementsByClassName("heading2")
console.log(heading2)

let heading3 = document.getElementsByTagName("h3")
console.dir(heading3)

let para = document.querySelectorAll("para")
console.log(para)


//children
console.log(document.querySelector("#heading").children)

//firstchild, lastchild, children

let div = document.querySelector("div")

//div.innerText
//div.innerHTMl
//div.innerHTML = <div>Hello</div>

//textContent - hidden elements text 


