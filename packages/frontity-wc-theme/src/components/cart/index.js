import React from 'react';
import { Box, Text } from '@chakra-ui/core';
import { connect } from 'frontity';

import { PageTitle } from '../page-title';
import CartDetail from './cart-detail';

const Cart = ({ state }) => {
    return (
        <Box>
            <PageTitle text='Cart' />
            {
                state.theme.cart.items.length === 0
                    ? <Text>Your cart is currently empty</Text>
                    : <CartDetail />
            }
        </Box>
    )
};

export default connect(Cart);