let button = document.querySelector('button');
let textarea = document.querySelector('.textarea');

button.addEventListener('click', generateJokes);

function handler() {
    fetch('https://v2.jokeapi.dev/joke/Any')
        .then((response) => { return response.json() })
        .then((response) => {
            console.log(response);

            let str = '';
            str += `
                  <h1>${response.setup}</h1>
                  <p>${response.delivery}</p>
                  `;

            textarea.innerHTML = str;
        });
}

handler();

function generateJokes() {
    fetch('https://v2.jokeapi.dev/joke/Any')
        .then((response) => { return response.json() })
        .then((response) => {
            console.log(response);

            let str = '';
            str += `
                  <h1>${response.setup}</h1>
                  <p>${response.delivery}</p>
                  `;

            textarea.innerHTML = str;
        });
}