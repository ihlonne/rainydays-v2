import { displayJackets } from './displayJackets.mjs';

const setCategory = async function (rainyDaysData) {
  let selectedOption = '';
  let dropdown = document.getElementById('select');

  dropdown.addEventListener('change', async () => {
    selectedOption = dropdown.value;

    let filteredData = [];

    switch (selectedOption) {
      case 'Favorite':
        filteredData = rainyDaysData.data.filter((item) => item.favorite);
        break;
      case 'Female':
        filteredData = rainyDaysData.data.filter(
          (item) => item.gender === 'Female'
        );
        break;
      case 'Male':
        filteredData = rainyDaysData.data.filter(
          (item) => item.gender === 'Male'
        );
        break;
      default:
        filteredData = rainyDaysData.data;
    }

    await displayJackets(filteredData);
  });

  await displayJackets(rainyDaysData.data);
};

export default setCategory;
