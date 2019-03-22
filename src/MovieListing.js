import React from 'react'

//<ul> to contain and display fetched items
class MovieListing extends React.Component {
    render() {
        return <ul key={this.props.movie.id}>
        <li><img alt="poster" src={this.props.movie.poster_src} width="180px" length="200px" /></li>
        <li>{this.props.movie.title}</li>
        <li>Released: {this.props.movie.release_date.slice(0,4)}</li>
        <li>Rating: {this.props.movie.vote_average} / 10</li>
      </ul>       
    }
}

export default MovieListing