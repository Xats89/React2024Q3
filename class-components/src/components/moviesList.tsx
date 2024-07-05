import React, { Component } from 'react';
import getSWMovies,  {MovieResult} from '../api/getSWMovies'
import searchSW from '../api/searchSW'

class MoviesList extends Component<object, { movies: MovieResult[] }> {
  constructor(props: object) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  async componentDidMount() {
    try {
      const lastSearch = this.checkLastSearch()
      if(lastSearch) {
        const res = await searchSW(lastSearch)
        this.setState({ movies: res.results });  
      } else {
        const res = await getSWMovies();
        if (res) {
          this.setState({ movies: res.results });
        } else {
          console.error('Failed to fetch data');
        }
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  handleClick() {
    console.log(this.state);
  }

  async onSearchClick(
    event:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): Promise<void> {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    const text = formJson.searchInput.toString().trim()
    localStorage.setItem('lastSearch', text);
    // console.log(searchSW(text))
    const res = await searchSW(text)
    this.setState({ movies: res.results });
  }

  private checkLastSearch() {
    const lastSearch = localStorage.getItem('lastSearch')
    return   lastSearch ? lastSearch : ''
  }

  render() {
    const { movies } = this.state;

    return (
      <>
        <form onSubmit={(event) => this.onSearchClick(event)}>
          <input name="searchInput" type="text" placeholder="Search" defaultValue={this.checkLastSearch()} />
          <button type="submit">Search</button>
        </form>
        <div>
          <h1>Star Wars Movies List</h1>
          <ul className='movies-list'>
            {movies.map((movie) => (
              <li className='movies-list__item' key={movie.episode_id}>
                <h3>
                  {movie.title}
                </h3>
                <p>
                  {movie.opening_crawl}
                </p>
                <p>
                Release date: {movie.release_date}
                </p>
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
