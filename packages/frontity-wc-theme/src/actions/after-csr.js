export const afterCSR = async ({ state, libraries, actions }) => {
  if (state.frontity.platform === 'client') {
    if ('' === state.theme.token) {
      actions.theme.fetchToken();
    }

    // Get stored cart
    if (0 === state.theme.cart.items.length) {
      const storedCart = localStorage.getItem(
        'frontity_wc_cart'
      );
      if (storedCart && storedCart.length !== 0) {
        state.theme.cart = JSON.parse(storedCart);
        state.theme.cart.items.map(cartItem => {
          actions.source.fetch(
            `/cart-product/${cartItem.productId}`,
          );
        })
      };
    }
    
  }
}