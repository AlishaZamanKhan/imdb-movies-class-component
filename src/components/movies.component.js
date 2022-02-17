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
    movies: [],
  };

  componentDidMount() {
    const movies = getMovies();
    this.setState({ movies });
  }

  handleToggleRating = (movieRank) => {
    const movies = [...this.state.movies];
    const movie = movies.find((movie) => movie.id === movieRank);
    movie.user_rating = !movie.user_rating;
    this.setState({ movies });
  };

  render() {
    const columns = [
      {
        label: "Rank",
        path: "id",
        content: (movie, key) => <td> {movie[key]}</td>,
      },
      {
        label: "Title",
        path: "title",
        content: (movie, key) => <td> {movie[key]}</td>,
      },
      {
        label: "Poster",
        path: "posterUrl",
        content: (movie, key) => (
          <td>
            <img src={movie[key]}  style={{ height:'100px', width: 'auto' }} />
          </td>
        ),
      },
      {
        label: "User_rating",
        path: "user_rating",
        content: (movie, key) => (
          <td>
            <Rating
              isRated={movie[key]}
              rank={movie.id}
              handleToggleRating={this.handleToggleRating}
            />
          </td>
        ),
      },
    ];

    return (
      <>
        <Table data={this.state.movies} columns={columns} />
      </>
    );
  }
}

export default Movies;
