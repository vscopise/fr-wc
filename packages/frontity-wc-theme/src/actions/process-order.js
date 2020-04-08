import { fetch } from 'frontity';

export const processOrder = async ({ state, actions }) => {
    const fields = state.theme.checkoutFields;
    state.theme.processingOrder = true;

    const line_items = state.theme.cart.items.map(item => {
        return {
            product_id: item.productId,
            quantity: item.quantity
        }
    });

    const billing = {
        first_name: fields.filter(f => f.name === 'firstName')[0].value,
        last_name: fields.filter(f => f.name === 'lastName')[0].value,
        company: fields.filter(f => f.name === 'companyName')[0].value,
        address_1: fields.filter(f => f.name === 'streetAddress')[0].value,
        address_2: fields.filter(f => f.name === 'apartment')[0].value,
        city: fields.filter(f => f.name === 'city')[0].value,
        country: fields.filter(f => f.name === 'country')[0].value,
        postcode: fields.filter(f => f.name === 'postcode')[0].value,
        phone: fields.filter(f => f.name === 'phone')[0].value,
        email: fields.filter(f => f.name === 'email')[0].value,
        emnotesail: fields.filter(f => f.name === 'notes')[0].value,
    }

    let orderData = {
        payment_method: 'bacs',
        billing: billing,
        line_items: line_items
    };

    const res = await fetch(
        `${state.frontity.url}/wp-json/wc/v3/orders`,
        {
            method: 'POST',
            body: orderData,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${state.theme.token}`
            },
            body: JSON.stringify(orderData)
        }
    );
    const body = await res.json();

    actions.theme.paymentSubmit({
        orderId: body.id,
        orderKey: body.order_key
    });

    state.theme.processingOrder = false;

    actions.theme.clearCart();
}