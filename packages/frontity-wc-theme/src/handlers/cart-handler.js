export const cartHandler = {
    pattern: '/cart/',
    func: ({ state }) => {
        state.source.data['/cart/'].isCart = true;
    }
}