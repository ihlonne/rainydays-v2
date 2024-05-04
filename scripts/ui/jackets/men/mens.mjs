import { API_RAINY_DAYS } from '../../../common/constants.mjs';
import { fetchData } from '../../../utils/fetchData.mjs';
import { displayJackets } from '../displayJackets.mjs';

import { handleUI } from '../../common/handleUI.mjs';

export const mensJackets = async function () {
  handleUI();
  const data = await fetchData(API_RAINY_DAYS);
  const mensJackets = data.data.filter((item) => item.gender === 'Male');

  displayJackets(mensJackets);
};

mensJackets();
