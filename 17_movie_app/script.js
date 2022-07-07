const API_URL =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=305094e0a0c398b277e4dc31d7cf0d62&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_URL =
  'https://api.themoviedb.org/3/search/movie?api_key=305094e0a0c398b277e4dc31d7cf0d62&query="';

const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

getMovies(API_URL);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  showMovies(data.results);
}

function showMovies(movies) {
  main.innerHTML = '';

  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;

    const movieElement = document.createElement('div');

    console.log(poster_path);

    if (poster_path !== null) {
      var img = `<img src="${IMG_PATH + poster_path}" alt=""/>`;
    } else {
      var img = `<img src="./media/no_image_available.svg.png" class="no-image" alt=""/>`;
    }

    movieElement.innerHTML = `
    <div class="movie">
    ${img}
      <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getClassByRating(vote_average)}">${vote_average}</span>
      </div>
      <div class="overview">
        <h3>Overview</h3>
        ${overview}
      </div>
      </div>`;

    main.appendChild(movieElement);
  });
}

function getClassByRating(rating) {
  if (rating >= 8) return 'green';
  if (rating >= 5) return 'orange';
  return 'red';
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchTerm = search.value;

  if (searchTerm && searchTerm !== '') {
    getMovies(SEARCH_URL + searchTerm + '"');
    search.value = '';
  } else {
    window.location.reload();
  }
});
