import React from 'react';
import { Box, Button, Flex, Image, Text } from '@chakra-ui/core';
import { connect } from 'frontity';
import HeaderCartDetailItem from './header-cart-detail-item';

const HeaderCartDetail = ({ state, actions }) => {
    return (
        <Box>
            {state.theme.cart.items.map((item) => {
                return (
                    <HeaderCartDetailItem
                        key={item.productId}
                        item={item}
                    />
                );
            })}
            <Flex borderTop='1px solid #ccc' margin='10px 0' padding='10px 0'>
                Total: ${state.theme.cart.cartTotal}
            </Flex>
            <Button variantColor='teal' onClick={() => { actions.router.set('/cart/') }}>
                View Cart
            </Button>
        </Box>
    );
};

export default connect(HeaderCartDetail);