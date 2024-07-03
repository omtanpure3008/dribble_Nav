// Loops


/*
    querySelector()
    querySelectorAll()
    getElementById()
    getElementByClassName()
    getElementByTagName()
*/



// () = paranthesis
// [] = square bracket
// {} = curly braces


/*
    innerHTML
    innerText
    textContent
*/


/*
    var heading = document.querySelector('h1');

    heading.classList.add('abc');
    heading.classList.remove('xyz');
    heading.classList.toggle('pqr');
*/



var menuButton = document.querySelector('.menuButton');
console.log(menuButton);

var leftDiv = document.querySelector('.left');
console.log(leftDiv);

function abc() {
    leftDiv.classList.toggle('dropdown');
}

