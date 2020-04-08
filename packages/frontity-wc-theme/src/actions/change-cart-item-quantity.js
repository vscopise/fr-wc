export const changeCartItemQuantity = ({ state, actions }) => ({ quantity, productId }) => {
    //console.log('quantity', quantity);
    //console.log('productId', productId);

    const productInCart = state.theme.cart.items.findIndex(
        product => product.productId === productId
    );

    state.theme.cart.items[productInCart].quantity = quantity;
    
    actions.theme.calculateCartTotal();
}