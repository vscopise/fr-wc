import { fetch } from 'frontity';

export const fetchToken = async ({ state }) => {

    const res = await fetch(
        `${state.source.api}/jwt-auth/v1/token`,
        {
            method: 'POST',
            headers: new Headers({
              'Content-Type': 'application/json'
            }),
            body: JSON.stringify({
              "username": "woocommerce",
              "password": "123"
            }),
            redirect: 'follow'
        }
    );
    const body = await res.json();
    state.theme.token = body.token;
}