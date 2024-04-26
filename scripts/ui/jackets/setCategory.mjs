import { displayJackets } from './displayJackets.mjs';

const setCategory = function (jackets) {
  let selectedOption = '';
  const dropdown = document.getElementById('select');

  dropdown.addEventListener('change', () => {
    selectedOption = dropdown.value;

    let filteredData = [];

    switch (selectedOption) {
      case 'Favorite':
        filteredData = jackets.data.filter((item) => item.favorite);
        break;
      case 'Female':
        filteredData = jackets.data.filter((item) => item.gender === 'Female');
        break;
      case 'Male':
        filteredData = jackets.data.filter((item) => item.gender === 'Male');
        break;
      default:
        filteredData = jackets.data;
    }

    displayJackets(filteredData);
  });

  displayJackets(jackets.data);
};

export default setCategory;
