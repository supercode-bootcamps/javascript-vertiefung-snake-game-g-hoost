
let div = document.createElement('div');

div.innerHTML = '<div></div>';
document.body.appendChild(div);
div.id = ("snakeField");
let color = 100;

for (let i = 0; i <= 99; i++) {
    let newDiv = document.createElement('div');
    snakeField.appendChild(newDiv);
    newDiv.className = 'item';
    newDiv.addEventListener('mouseover', (e) =>
    {
        e.target.style.backgroundColor = 'orange';
        e.target.style.backgroundColor = 'yellow'[Math.floor(Math.random()(4000) * 'yellow')];
        setTimeout(() =>
        {
            e.target.style.backgroundColor = 'lightblue';
        }, 500);

    });


};