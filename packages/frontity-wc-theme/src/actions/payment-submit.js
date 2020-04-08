import { fetch } from 'frontity';

export const paymentSubmit = ({ state, actions }) => ({ orderId, orderKey }) => {
    //console.log('orderId', orderId)

    let paymentData = {
        //set_paid: true,
        status: 'processing'
        //payment_token: orderKey
    };

    fetch(`${state.frontity.url}/wp-json/wc/v2/orders/${orderId}`, {
        method: 'PUT',
        body: paymentData,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${state.theme.token}`
        },
        body: JSON.stringify(paymentData)
    })
        .then(res => res.json())
        .then(body => console.log(body))
        .then(
            actions.theme.openModal({
                content: `Your order have been sended !`,
            })
        )


    /*const res = await fetch(
        `${state.frontity.url}/wp-json/wc/v2/payment`,
        {
            method: 'POST',
            body: paymentData,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${state.theme.token}`
            },
            body: JSON.stringify(paymentData)
        }
    );
    const body = await res.json(); */

}