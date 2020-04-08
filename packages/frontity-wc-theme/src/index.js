import Theme from './components';
import image from "@frontity/html2react/processors/image";

import { addToCart } from './actions/add-to-cart';
import { afterCSR } from './actions/after-csr';
import { calculateCartTotal } from './actions/calculate-cart-total';
import { changeCartItemQuantity } from './actions/change-cart-item-quantity';
import { fetchToken } from './actions/fetch-token';
import { goCart } from './actions/go-cart';
import { setCheckoutField } from './actions/set-checkout-field';
import { openModal } from './actions/open-modal';
import { clearCart } from './actions/clear-cart';
import { closeModal } from './actions/close-modal';
import { paymentSubmit } from './actions/payment-submit';
import { placeOrder } from './actions/place-order';
import { processOrder } from './actions/process-order';
import { toggleShowCartDetail } from './actions/toggle-show-cart-detail';
import { trashCartItem } from './actions/trash-cart-item';

import { cartProductHandler } from './handlers/cart-product-handler';
import { cartHandler } from './handlers/cart-handler';
import { checkoutHandler } from './handlers/checkout-handler';
import { fetchMediaHandler } from './handlers/fetch-media-handler';

/* const before = async ({ state, libraries, actions }) => {
  //libraries.source.handlers.push(tokenHandler);
  await actions.source.fetch('/fetch-token/')
  //console.log('beforeSSR')
}; */

export default {
  name: 'frontity-wc-theme',
  roots: {
    theme: Theme
  },
  state: {
    theme: {
      cart: {
        cartTotal: 0,
        items: [],
      },
      goCart: false,
      processingOrder: false,
      showModal: false,
      showCartDetail: false,
    }
  },
  actions: {
    theme: {
      addToCart,
      afterCSR,
      /* beforeSSR: async ({ state, actions }) => {
        const data = state.source.get(state.router.link);
        if ('product' === data.type) {
          alert('product')
        }
        //const product = state.source[data.type][data.id];
        // We fetch the initial link.
        await actions.source.fetch(state.router.link);
        // NOTE: This is not needed if autoFetch is activated in your router.
      }, */
      calculateCartTotal,
      changeCartItemQuantity,
      clearCart,
      fetchToken,
      setCheckoutField,
      closeModal,
      goCart,
      openModal,
      paymentSubmit,
      placeOrder,
      processOrder,
      trashCartItem,
      toggleShowCartDetail,
    }
  },
  libraries: {
    html2react: {
      processors: [image]
    },
    source: {
      handlers: [
        cartProductHandler,
        cartHandler,
        checkoutHandler,
        fetchMediaHandler,
      ]
    }
  }
};
