import React, { Component } from "react";
// import Table from "./common/table.component";
// import getMovies from "../service/get-movies.service";
import _ from "lodash";
import Table from "./common/table.component";
import Rating from "./common/rating.component";

// import Pagination from "./common/pagination.component";
// import Filtering from "./common/filtering.component";

class Movies extends Component {
	state = {
		movies: [
			{rank: '1', title:'The Shawshank Redemption', imdb_rating:'9.2', user_rating: true},
			{rank: '2', title:'The Godfather', imdb_rating:'9.1', user_rating: false},
			{rank: '3', title:'The Godfather: Part II ', imdb_rating:'9.1', user_rating: true},
			{rank: '4', title:'The Dark Knight', imdb_rating:'9.0', user_rating: false},
			{rank: '5', title:'12 Angry Men', imdb_rating:'8.9', user_rating: true}
		]

	};

	handleToggleRating = movieRank => {
		const movies = [...this.state.movies];
		const movie = movies.find(movie => movie.rank === movieRank);
		movie.user_rating = !(movie.user_rating);
		this.setState({ movies });
	}

	render() {
	const columns = [
		{ label: 'Rank', path:'rank', content: (movie, key) => <td> {movie[key]}</td>},
		{ label: 'Title', path:'title', content:(movie, key) => <td> {movie[key]}</td>},
		{ label: 'IMDB_rating', path:'imdb_rating', content: (movie, key) => <td> {movie[key]}</td>},
		{ label: 'User_rating', path:'user_rating', content:(movie, key)=> <td><Rating isRated= {movie[key]} rank={ movie.rank } handleToggleRating={this.handleToggleRating}/></td>}
	]

	return (
		<>
		<Table	data =  {this.state.movies}
				columns ={columns} 
		/>
		</>
	);
	}
}

export default Movies;
