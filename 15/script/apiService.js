const APIKey='68dbd960b4f42c7dacf923a4d691e57f';
const BaseUrl='https://api.themoviedb.org/3';

export async function fetchTrendingMovies(){
    try{
        const response = await fetch(`${BaseUrl}/trending/movie/week?api_key=${APIKey}`);
        const data = await response.json();
        return data.results;
    }
    catch(e){
        console.error('Помилка:' ,e);
        return[];
    }
}

export async function fetchMovieDetails(movieId) {
    try{
        const response = await fetch(`${BaseUrl}/movie/${movieId}?api_key=${APIKey}`);
        const data = await response.json();
        return data;
    }
    catch(e){
        console.error('Помилка:' ,e);
        return null;
    }
}