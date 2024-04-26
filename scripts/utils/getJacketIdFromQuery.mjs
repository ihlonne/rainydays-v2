// SAVE UNIQUE ID FROM SELECTED PRODUCT
export const getJacketIdFromQuery = async function () {
  const urlParam = new URLSearchParams(window.location.search);
  return urlParam.get('id');
};
