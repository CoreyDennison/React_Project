import React from 'react'

class MovieListing extends React.Component {
    render() {
        return <ul key={this.props.movie.id}>
        <li><img alt="poster" src={this.props.movie.poster_src} /></li>
        <li>{this.props.movie.title}</li>
        <li>Released: {this.props.movie.release_date.slice(0,4)}</li>
        <li>Rating: {this.props.movie.vote_average}</li>
      </ul>       
    }
}

export default MovieListing