import React, { useEffect } from 'react';
import { Grid } from '@chakra-ui/core';
import { connect } from 'frontity';
import ProductArchive from '../product-archive/';
import ProductImage from './product-image';
import ProductContent from './product-content';

const Product = ({ state, actions, libraries }) => {
    const data = state.source.get(state.router.link);

    useEffect(() => {
        actions.source.fetch('/');
        ProductArchive.preload();
    }, []);

    return data.isReady ? (
        <Grid
            w="100%"
            templateColumns="40% 60%"
            gap={6}
        >
            <ProductImage />
            <ProductContent />
        </Grid>
    ) : null;
}
export default connect(Product);