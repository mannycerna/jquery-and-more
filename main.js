let myDiv = $('<div>Click Here!</div>');

let page  = $('#body');
let myInput = $('#myInput');
page.append(myDiv);

let myUl = $('<ul></ul>');
page.append(myUl);

myDiv.on('click', () => {
    console.log('Hello World!');  


let divDisplay = $(`<li> ${myInput.val()}</li>`);

myUl.append(divDisplay);
myInput.val('');//clears text for input
})


//instead of .style, .css
page.css({
    backgroundColor: "blue",
    color: "white"
})