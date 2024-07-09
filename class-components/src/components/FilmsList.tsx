import React, { Component } from 'react';
import getSWFilms, { FilmResult } from '../api/getSWFilms';
import searchSW from '../api/searchSW';

interface FilmsListProps {
  filmsData: FilmResult[];
  updateFilmsData: (data: FilmResult[]) => void;
}

class FilmsList extends Component<FilmsListProps> {
  async componentDidMount() {
    try {
      const lastSearch = localStorage.getItem('lastSearch') || '';
      if (lastSearch) {
        const res = await searchSW(lastSearch);
        this.props.updateFilmsData(res.results);
      } else {
        const res = await getSWFilms();
        if (res) {
          this.props.updateFilmsData(res.results);
        } else {
          console.error('Failed to fetch data');
        }
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
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
    const text = formJson.searchInput.toString().trim();
    localStorage.setItem('lastSearch', text);
    const res = await searchSW(text);
    this.props.updateFilmsData(res.results);
  }

  render() {
    const films = this.props.filmsData;

    return (
      <div>
        <h1>Star Wars films List</h1>
        <ul className="films-list">
          {films.map((film) => (
            <li className="films-list__item" key={film.episode_id}>
              <h3>{film.title}</h3>
              <p>{film.opening_crawl}</p>
              <p>Release date: {film.release_date}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default FilmsList;
