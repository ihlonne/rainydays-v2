import { API_RAINY_DAYS } from './common/constants.mjs';
import { fetchData } from './utils/fetchData.mjs';

import { hideLoader, showLoader } from './loader.mjs';
import setCategory from './selectOption.mjs';

export async function main() {
  try {
    showLoader();
    const rainyDaysData = await fetchData(API_RAINY_DAYS);
    setCategory(rainyDaysData);

    return rainyDaysData;
  } catch (error) {
    console.log(error);
    throw new Error();
  } finally {
    hideLoader();
  }
}

main();
