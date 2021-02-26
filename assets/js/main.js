
let div = document.createElement('div');

document.body.appendChild(div);
div.id = "snakeField";
let score = 0;

let yourScore = document.createElement('p');
snakeField.appendChild(yourScore);

for (let i = 0; i <= 99; i++) {
    let newDiv = document.createElement('div');
    snakeField.appendChild(newDiv);
    newDiv.className = 'item';
    newDiv.addEventListener('mouseover', (e) =>
    {
        e.target.style.backgroundColor = 'orange';
        setTimeout(() =>
        {
            e.target.style.backgroundColor = 'lightblue';
        }, 500);
    });
};

let snakeItem = document.getElementsByClassName('item');

let foodItem = () =>
{
    let redDiv = 0;

    setInterval(function ()
    {
        redDiv = Math.floor(Math.random() * 99);
        snakeItem[redDiv].classList.add('food');
        snakeItem[redDiv].addEventListener('mouseover', (e) =>
        {
            e.target.classList.remove('food');
            count = Number(score);
            yourScore.innerHTML = 'your score is: ' + score++;

        });
    }, 3000);
};
foodItem();