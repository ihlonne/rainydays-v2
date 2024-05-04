export async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('There was an error fetching the jackets.');
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  } finally {
  }
}
