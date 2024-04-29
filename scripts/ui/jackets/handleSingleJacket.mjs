import { API_RAINY_DAYS } from '../../common/constants.mjs';
import { fetchData } from '../../utils/fetchData.mjs';
import { getJacketIdFromQuery } from '../../utils/getJacketIdFromQuery.mjs';
import { hideLoader, showLoader } from '../common/loader.mjs';
import { displaySingleJacket } from './displaySingleJacket.mjs';

const productWrapper = document.querySelector('#product-page');

// SAVE UNIQUE DATA FROM SELECTED PRODUCT
export const main = async function () {
  const id = await getJacketIdFromQuery();
  const productUrl = `${API_RAINY_DAYS}/${id}`;

  const jacket = await fetchData(productUrl);
  showLoader();

  const singleJacketHtml = displaySingleJacket(jacket);
  productWrapper.append(singleJacketHtml);

  hideLoader();
};

main();
