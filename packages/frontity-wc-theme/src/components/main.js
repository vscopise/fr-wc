import React from 'react';
import { Box, Grid } from '@chakra-ui/core';
import { connect } from 'frontity';
import Product from './product';
import ProductArchive from './product-archive'
import Loader from './loader';
import Cart from './cart';
import Checkout from './checkout';

const Main = ({ state }) => {
    const data = state.source.get(state.router.link);
    //console.log(data)
    return (
        <Box>
            {
                (data.isFetching && <Loader />) ||
                (data.isProduct && <Product />) ||
                (data.isProductArchive && <ProductArchive />) ||
                (data.isProductCat && <ProductArchive />) ||
                (data.isCart && <Cart />) ||
                (data.isCheckout && <Checkout />) ||
                (data.isHome && <div>Home</div>) ||
                (data.is404 && <div>is404</div>)
            }
        </Box>
    )
}
export default connect(Main);