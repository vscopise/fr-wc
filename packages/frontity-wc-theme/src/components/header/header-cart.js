import React from 'react';
import { Box, Button, Flex, Image, Text } from '@chakra-ui/core';
import { connect } from 'frontity';

import { FaShoppingCart } from 'react-icons/fa';
import HeaderCartDetail from './header-cart-detail';

const HeaderCart = ({ state, actions }) => {

    return (
        <Box
            margin='0 50px'
            display='inline-box'
            position='relative'
            onMouseEnter={actions.theme.toggleShowCartDetail}
            onMouseLeave={actions.theme.toggleShowCartDetail}
        >
            <Flex alignItems='center'>
                <Flex>
                    <FaShoppingCart size='20px' />
                    {
                        state.theme.cart.items.length > 0 &&
                        <Text as='span' fontSize='0.8em' margin='0 5px'>
                            {state.theme.cart.items.length} items (${state.theme.cart.cartTotal})
                        </Text>
                    }
                    {
                        state.theme.showCartDetail &&
                        <Box
                            position='absolute'
                            background='#fff'
                            padding='5px'
                            border='1px solid #ccc'
                            width='200px'
                        >
                            {
                                state.theme.cart.items.length === 0
                                    ? <Text fontSize='0.8em'>Your cart is empty.</Text>
                                    : <HeaderCartDetail />
                            }
                        </Box>
                    }
                </Flex>
            </Flex>
        </Box>
    );
};

export default connect(HeaderCart);