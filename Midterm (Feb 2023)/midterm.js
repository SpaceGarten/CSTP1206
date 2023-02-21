const apiKey = '48bae2a18923cc05022401669bcbad36';
const apiUrl = `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`;

// get a reference to the search bar and the movie container
const searchBar = document.getElementById('search-bar');
const movieContainer = document.getElementById('movie-container');

// create a template for the movie tile
const movieTileTemplate = (title, releaseDate, description, genre, imageUrl) => `
  <div class="movie-tile">
    <img src="${imageUrl}" alt="${title}">
    <h3>${title}</h3>
    <p>Released: ${releaseDate}</p>
    <p>Genre: ${genre}</p>
    <p>${description}</p>
  </div>
`;

// fetch data from the API and update the HTML with the movie data
const fetchMovies = (searchQuery = '') => {
  const url = searchQuery ?
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}` :
    apiUrl;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const movies = data.results;

      // clear the previous movie tiles
      movieContainer.innerHTML = '';

      movies.forEach(movie => {
        // extract the relevant movie data
        const title = movie.title;
        const releaseDate = movie.release_date;
        const description = movie.overview;
        const genre = movie.genre_ids;
        const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

        // create a new movie tile and fill in the data
        const movieTile = document.createElement('div');
        movieTile.classList.add('movie-tile');
        movieTile.innerHTML = movieTileTemplate(title, releaseDate, description, genre, imageUrl);

        // add the movie tile to the container
        movieContainer.appendChild(movieTile);
      });
    })
    .catch(error => {
      console.error('Error fetching movies:', error);
    });
};

// fetch the initial list of movies
fetchMovies();

// listen for search queries
searchBar.addEventListener('keyup', event => {
  const searchQuery = event.target.value.trim();

  if (searchQuery.length >= 3) {
    fetchMovies(searchQuery);
  }
});
