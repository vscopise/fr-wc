export const openModal = ({ state }) => ({content, goCart}) => {
    state.theme.showModal = true;
    state.theme.modalContent = content;
    state.theme.goCart = goCart;
    setTimeout(() => { state.theme.showModal = false }, 500000);
}