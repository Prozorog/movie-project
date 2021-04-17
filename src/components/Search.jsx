import React from "react";

class Search extends React.Component {
  state = {
    search: "",
    type: "all",
  };

  searchHandler = (e) => {
    this.setState({
      search: e.target.value,
    });
  };

  handleKey = (e) => {
    if (e.key === "Enter") {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  };

  handleType = (e) => {
    this.setState(
      () => ({type: e.target.dataset.type}),
      () => { this.props.searchMovies(this.state.search, this.state.type)}
    );
  };

  render() {
    const { search, type } = this.state;

    return (
      <div className="col s12">
        <div className="input-field">
          <input
            type="search"
            className="validate"
            placeholder="Search"
            value={search}
            onChange={this.searchHandler}
            onKeyDown={this.handleKey}
          />
          <button
            className="waves-effect waves-light btn light-green search-btn"
            onClick={() =>
              this.props.searchMovies(this.state.search, this.state.type)
            }
          >
            Search
          </button>
        </div>

        <div className="col s12">
          <p>
            <label>
              <input
                name="type"
                type="radio"
                data-type="all"
                onChange={this.handleType}
                checked={type === "all"}
              />
              <span>All</span>
            </label>
          </p>
          <p>
            <label>
              <input
                name="type"
                type="radio"
                data-type="movie"
                onChange={this.handleType}
                checked={type === "movie"}
              />
              <span>Movies only</span>
            </label>
          </p>
          <p>
            <label>
              <input
                name="type"
                type="radio"
                data-type="series"
                onChange={this.handleType}
                checked={type === "series"}
              />
              <span>Series only</span>
            </label>
          </p>
        </div>
      </div>
    );
  }
}

export { Search };
