import React from 'react';
import { Box, Grid, Button, Flex, Image, Text } from '@chakra-ui/core';
import { connect } from 'frontity';
import CartDetailItem from './cart-detail-item';
import {CartDetailHeader} from './cart-detail-header';
import CartTotal from './cart-total';

const CartDetail = ({ state, actions }) => {
    return (
        <Box>
            <CartDetailHeader />
            {
                state.theme.cart.items.map((item, index) => {
                    return (
                        <CartDetailItem
                            key={item.productId}
                            item={item}
                            index={index}
                        />
                    )
                })
            }
            <CartTotal />
        </Box>
    )
}

export default connect(CartDetail);