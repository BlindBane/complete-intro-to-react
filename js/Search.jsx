import React, { Component } from 'react';
import preload from '../data.json';
import ShowCard from './ShowCard';

class Search extends Component {
  state = {
    searchTerm: ''
  };
  handleSearchTermChange = e => {
    this.setState({ searchTerm: e.target.value });
  };
  render() {
    return (
      <div className="search">
        <div>
          <header>
            <h1>Bane-video</h1>
            <input
              onChange={this.handleSearchTermChange}
              value={this.state.searchTerm}
              type="text"
              placeholder="Search here..."
            />
          </header>
          {preload.shows
            .filter(show =>
              `${show.title} ${show.description} ${show.year}`
                .toUpperCase()
                .includes(this.state.searchTerm.toUpperCase().trim())
            )
            .map(show => <ShowCard key={show.imdbID} show={show} />)}
        </div>
      </div>
    );
  }
}

export default Search;
