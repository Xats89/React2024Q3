export default async function getSWAPI(fetchURL: string) {
  const url = `${fetchURL}`;
  const options = {
    method: 'GET',
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}