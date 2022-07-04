const jokeEl = document.getElementById('joke');
const btn = document.getElementById('jokeBtn');

generateJoke();

//using .then
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   };

//   fetch('https://icanhazdadjoke.com', config)
//     .then((response) => response.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke;
//     });
// }

// btn.addEventListener('click', () => {
//   generateJoke();
// });

//usin async await
async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  const res = await fetch('https://icanhazdadjoke.com', config);
  const data = await res.json();
  jokeEl.innerHTML = data.joke;
}

btn.addEventListener('click', () => {
  generateJoke();
});
