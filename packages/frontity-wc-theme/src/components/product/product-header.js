import React from 'react';
import { Box, Flex, Button } from '@chakra-ui/core';
import { connect } from 'frontity';
import ProductRating from './product-rating';

const ProductHeader = ({ state }) => {
    const data = state.source.get(state.router.link);
    const {
        title, 
        excerpt, 
        price, 
        content,
        rating_count,
        average_rating
    } = state.source[data.type][data.id];

    return (
        <Box w='100%'>
            <Box as='h1' fontWeight='bold' fontSize='2em'>
                {title.rendered}
            </Box>
            <ProductRating 
                average={average_rating}
                rating={rating_count}
            />
        </Box>
    )
};
export default connect(ProductHeader);