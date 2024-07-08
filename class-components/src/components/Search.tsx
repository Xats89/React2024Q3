import { Component } from 'react';
import { FilmResult } from '../api/getSWFilms';
import searchSW from '../api/searchSW';

interface SearchProps {
  updateFilmsData: (data: FilmResult[]) => void;
}
export default class Search extends Component<SearchProps> {
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
    const lastSearch = localStorage.getItem('lastSearch')
    return (
      <form className='search-form' onSubmit={(event) => this.onSearchClick(event)}>
        <input
        className='search-form__input'
          name="searchInput"
          type="text"
          placeholder="Search"
          defaultValue={lastSearch || ''}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}
