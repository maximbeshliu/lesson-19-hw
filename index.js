let text = document.getElementById('text');
let btnBlue = document.querySelector('.btn-blue');
let btnGreen = document.querySelector('.btn-green');
let btnRed = document.querySelector('.btn-red');
let delegationTest = document.getElementById('delegationTest');

delegationTest.addEventListener('click', function (e) {

    let target = e.target;

    if (target == btnBlue) {
        text.innerHTML = "You clicked First button";
        console.log(btnBlue.tagName)
        delegationTest.style.backgroundColor = "blue"
    } else if (target == btnGreen) {
        text.innerHTML = "You clicked Second button";
        console.log(btnGreen.tagName)
        delegationTest.style.backgroundColor = "green";
    } else if (target == btnRed) {
        text.innerHTML = "You clicked Third button";
        console.log(btnRed.tagName)
        delegationTest.style.backgroundColor = "red";
    } else if (target.tagName !== 'Button') {
        text.innerHTML = "Please press on the buttons!"
        delegationTest.style.backgroundColor = "black";
        delegationTest.style.color = "white";
    }

});

/*function getBlueMessage() {
    text.innerHTML = "You clicked First button",
        console.log(btnBlue.tagName)
}

function getGreenMessage() {
    text.innerHTML = "You clicked Second button",
        console.log(btnGreen.tagName)
}

function getRedMessage() {
    text.innerHTML = "You clicked Third button",
        console.log(btnRed.tagName)
}

btnBlue.addEventListener('click', getBlueMessage);
btnGreen.addEventListener('click', getGreenMessage);
btnRed.addEventListener('click', getRedMessage);
*/






