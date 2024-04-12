import { API_RAINY_DAYS } from '../common/constants.mjs';

export async function fetchData() {
  try {
    const response = await fetch(API_RAINY_DAYS);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  } finally {
  }
}
