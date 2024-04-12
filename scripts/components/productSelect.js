'use strict';

const selectBtn = document.querySelector('.select select');

export const changeSelectOption = () => {
  selectBtn.addEventListener('click', console.log('hello'));
};
