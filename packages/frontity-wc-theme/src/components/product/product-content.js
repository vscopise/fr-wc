import React from 'react';
import { Box, Flex, Button } from '@chakra-ui/core';
import { connect } from 'frontity';
import ProductContentItem2 from './product-content-item2';
import ProductContentItem from './product-content-item';
import ProductHeader from './product-header';

const ProductContent = ({ state }) => {
    const data = state.source.get(state.router.link);
    const {
        title, 
        excerpt, 
        price, 
        content
    } = state.source[data.type][data.id];

    return (
        <Box w='100%'>
            <ProductHeader />
            <Box as='h2' fontWeight='bold' fontSize='2em'>
                {title.rendered}
            </Box>
            <hr />
            <hr />
            <ProductContentItem2 title={title.rendered} />
            <ProductContentItem2 content={excerpt.rendered} />
            <ProductContentItem2 price content={price} />
            <ProductContentItem2 content={content.rendered} />
            <Flex
                justifyContent='flex-end'
                margin='20px 0'
            >
                <Button
                    variantColor='green'
                    onClick={event => actions.theme.addToCart({
                        event, productId: id, quantity: 1
                    })}
                >Add to cart</Button>
            </Flex>
        </Box>
    )
};
export default connect(ProductContent);