import { useState, useEffect, Dispatch, SetStateAction } from 'react';

const useSearchQuery = (): [string, Dispatch<SetStateAction<string>>] => {
const [query, setQuery] = useState<string>(() => {
const lastSearch = localStorage.getItem('lastSearch');
return lastSearch || '';
});
useEffect(() => {
  const lastSearch = localStorage.getItem('lastSearch');
  if (lastSearch) {
  setQuery(lastSearch);
  }
  }, []);
useEffect(() => {
return () => {
localStorage.setItem('lastSearch', query || '');
};
}, [query]);

return [query, setQuery];
};

export default useSearchQuery;
