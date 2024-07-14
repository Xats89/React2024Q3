import { useNavigate } from 'react-router-dom';
import useSearchQuery from '../utils/useSearchQuery ';

const Searching = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useSearchQuery();

  const onSearchClick = (
    event:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    const text = formJson.searchInput.toString().trim();
    setQuery(text);
    if (text) {
      navigate(`/people/where?search=${text}`);
    } else {
      navigate(`/people`);
    }
  };

  return (
    <form className="search-form" onSubmit={(event) => onSearchClick(event)}>
      <input
        className="search-form__input"
        name="searchInput"
        type="text"
        placeholder="Search"
        defaultValue={query}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Searching;
