
let div = document.createElement('div');

div.innerHTML = '<div></div>';
document.body.appendChild(div);
div.id = ("snakeField");




for (let i = 1; i <= 100; i++) {
    let newDiv = document.createElement('div');
    snakeField.appendChild(newDiv);
    newDiv.className = 'item';
};
