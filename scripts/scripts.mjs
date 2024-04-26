import { API_RAINY_DAYS } from './common/constants.mjs';
import { fetchData } from './utils/fetchData.mjs';

import { hideLoader, showLoader } from './ui/common/loader.mjs';
import setCategory from './ui/jackets/setCategory.mjs';
import { handleUI } from './ui/common/handleUI.mjs';

export async function main() {
  handleUI();

  try {
    showLoader();

    const jackets = await fetchData(API_RAINY_DAYS);

    setCategory(jackets);
  } catch (error) {
    console.log(error);
    //display error message in HTML
  } finally {
    hideLoader();
  }
}

main();
