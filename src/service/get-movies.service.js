const movies = [
    {rank: '1', title:'The Shawshank Redemption', imdb_rating:'9.2', user_rating: true},
    {rank: '2', title:'The Godfather', imdb_rating:'9.1', user_rating: false},
    {rank: '3', title:'The Godfather: Part II ', imdb_rating:'9.1', user_rating: true},
    {rank: '4', title:'The Dark Knight', imdb_rating:'9.0', user_rating: false},
    {rank: '5', title:'12 Angry Men', imdb_rating:'8.9', user_rating: true}
];

function getMovies(){
    return movies;
}

export default getMovies;