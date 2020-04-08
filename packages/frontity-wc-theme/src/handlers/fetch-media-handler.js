export const fetchMediaHandler = {
    pattern: '/fetch-media/:id',
    func: async ({ params, state, libraries }) => {

        // 1. get image
        const response = await libraries.source.api.get({
            endpoint: `media/${params.id}`,
        });

        // 2. add image to state
        const [image] = await libraries.source.populate({ response, state });
        
        // 3. add route to data
        Object.assign(state.source.attachment[params.id], { image });
    }
}