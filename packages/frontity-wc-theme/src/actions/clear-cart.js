export const clearCart = ({ state }) => {
    //clear state cart
    state.theme.cart.items = [];
    state.theme.cart.cartTotal = 0;

    //clear localStorage
    localStorage.setItem('frontity_wc_cart', '');

    //clear checkout form
    state.theme.checkoutFields.map(field => field.value = '');
}