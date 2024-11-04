import { fetchMovieDetails, fetchTrendingMovies } from "./apiService.js";

async function displayTredingMovies(){
    const movies = await fetchTrendingMovies();
    const moviesList= document.querySelector('.moviesList');
    moviesList.innerHTML='';

    movies.forEach(movie =>{
        const listItem= document.createElement('div');
        listItem.innerHTML=`
        <div class='card '>
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path} " class='card-img-top' alt='${movie.title}'>
              <div class='card-body text-center '>
                    <h5 class='card-title'>${movie.title}</h5>
                    <button class="btn btn-primary rounded-pill  text-center  mt-2 px-2 movieBtn " data-movie-id='${movie.id}'>Детальніше</button>
              </div>
        </div>`
        moviesList.appendChild(listItem);
        const button = listItem.querySelector('.movieBtn');
    button.addEventListener('click', function() {
      const movieId = this.getAttribute('data-movie-id');
      displayMovieDetails(movieId);
    });
    })
}

async function displayMovieDetails(movieId){
    const movie= await fetchMovieDetails(movieId);
    console.log(movie);
    const movieDetails= document.querySelector('.movieDetails');
    if(movie){
        movieDetails.innerHTML=`
        <h2>${movie.title}</h2>
        <p>${movie.overview}</p>
        <p class='text-danger fs-3'><span class='text-dark fs-5'>Рейтинг: </span>${movie.vote_average}</p>`;
    }
    else{
        movieDetails.innerHTML=`<p>Не вдалося завантажити дані о фільмах</p>`;

    }
}

displayTredingMovies();