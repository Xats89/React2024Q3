import React, { Component } from 'react';
import getMovies, { Movie } from '../api/getMovies';

class MoviesList extends Component<object, { movies: Movie[] }> {
  constructor(props: object) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  async componentDidMount() {
    try {
      const res = await getMovies();
      if (res) {
        this.setState({ movies: res });
      } else {
        console.error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  handleClick() {
    console.log(this.state);
  }

  onSearchClick(
    event:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    localStorage.setItem('lastSearch', formJson.searchInput.toString().trim());
  }

  render() {
    const { movies } = this.state;

    return (
      <>
        <form onSubmit={(event) => this.onSearchClick(event)}>
          <input name="searchInput" type="text" placeholder="Search" />
          <button type="submit">Search</button>
        </form>
        <div>
          <h1>Movies List</h1>
          <ul className='movies-list'>
            {movies.map((movie) => (
              <li className='movies-list__item' key={movie.node.id}>
                <img className='movies-list__item_image'  src={movie.node.primaryImage.url} alt="movie image" />
                {movie.node.originalTitleText.text}
              </li>
            ))}
          </ul>
          <button onClick={this.handleClick}>click</button>
        </div>
      </>
    );
  }
}

export default MoviesList;
