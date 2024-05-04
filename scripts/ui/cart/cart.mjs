export const addToCart = function (jackets, quantity = 1) {
  const cart = localStorage.getItem('cart');

  if (cart === null) {
    // If the cart is empty, initialize it with the jackets and their quantity
    const newCart = jackets.map((jacket) => ({
      ...jacket,
      quantity: quantity,
    }));
    localStorage.setItem('cart', JSON.stringify(newCart));
  } else {
    const newCart = JSON.parse(cart);

    jackets.forEach((jacket) => {
      const existingItemIndex = newCart.findIndex(
        (item) => item.id === jacket.id
      );

      if (existingItemIndex !== -1) {
        // If the item already exists in the cart, update its quantity
        newCart[existingItemIndex].quantity += quantity;
      } else {
        // If the item does not exist in the cart, add it with the specified quantity
        newCart.push({ ...jacket, quantity: quantity });
      }
    });

    localStorage.setItem('cart', JSON.stringify(newCart));
  }
};
