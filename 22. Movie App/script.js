const APIKEY = '04c35731a5ee918f014970082a0088b1';
const APIURL =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=' + APIKEY + '&page=1';
const IMGPATH = 'https://image.tmdb.org/t/p/w1280';

async function getMovies() {
  const response = await fetch(APIURL);
  const responseData = await response.json();

  responseData.results.forEach(movie => {
    const movieEl = document.createElement('div');
    movieEl.classList.add('movie');

    movieEl.innerHTML = `
      <img src="${IMGPATH + movie.poster_path}" alt="${movie.title}">
      <div class="movie-info">
        <h3>${movie.title}</h3>
        <span>${movie.vote_average}</span>
      </div>
    `;

    document.body.appendChild(movieEl); // Ajoute l'élément créé au DOM (par exemple, au body)
  });

  return responseData;
}

getMovies();
