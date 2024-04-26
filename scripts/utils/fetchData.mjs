export async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch data.');
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
    //display error message in HTML
  } finally {
  }
}
