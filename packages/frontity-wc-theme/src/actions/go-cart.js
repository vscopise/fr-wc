export const goCart = ({ state, actions }) => ({ content, showCart }) => {
    state.theme.showModal = false;
    actions.router.set('/cart/');
}