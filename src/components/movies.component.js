import React, { Component } from "react";
// import Table from "./common/table.component";
import getMovies from "../service/get-movies.service";
import _ from "lodash";
import Table from "./common/table.component";
import Rating from "./common/rating.component";

// import Pagination from "./common/pagination.component";
// import Filtering from "./common/filtering.component";

class Movies extends Component {
	state = {
		movies: []
	};

	componentDidMount(){
		const movies = getMovies();
		this.setState({ movies });
	}

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
