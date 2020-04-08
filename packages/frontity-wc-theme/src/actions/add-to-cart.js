export const addToCart = ({ state, actions }) => ({ event, productId, quantity }) => {
    event.preventDefault();
    const productInCart = state.theme.cart.items.findIndex(
        product => product.productId === productId
    );
    if (-1 === productInCart) {
        state.theme.cart.items.push({ productId, quantity });
    } else {
        let quantity = state.theme.cart.items[productInCart].quantity
        state.theme.cart.items[productInCart].quantity = quantity + 1;
    }
    const productName = state.source.product[productId].product_name;
    actions.theme.openModal({
        content: `${productName} has been added to your cart.`,
        goCart: true
    });
    actions.theme.calculateCartTotal();
}