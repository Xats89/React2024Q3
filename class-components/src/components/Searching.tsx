import getSWAPI from '../api/getSWAPI';
import { IPeopleResult } from '../types/types';

export default function Searching({
  baseFetchURL,
  setSWAPIData,
}: {
  baseFetchURL: string;
  setSWAPIData: React.Dispatch<React.SetStateAction<IPeopleResult | null>>;
}) {
  async function onSearchClick(
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
    const res = await getSWAPI(baseFetchURL + '/?search=' + text);
    console.log(res)
    setSWAPIData(res);
  }

  const lastSearch = localStorage.getItem('lastSearch');

  return (
    <form className="search-form" onSubmit={(event) => onSearchClick(event)}>
      <input
        className="search-form__input"
        name="searchInput"
        type="text"
        placeholder="Search"
        defaultValue={lastSearch || ''}
      />
      <button type="submit">Search</button>
    </form>
  );
}
