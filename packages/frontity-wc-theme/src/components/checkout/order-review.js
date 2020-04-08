import React from 'react';
import { Box, Grid, Input, Text, Flex, Button } from '@chakra-ui/core';
import { connect } from 'frontity';
import HeaderCartDetailItem from '../header/header-cart-detail-item'
import OrderReviewItem from './order-review-item';
import { FaAcquisitionsIncorporated } from 'react-icons/fa';

const OrderReview = ({ state, actions }) => {
    return (
        <Box>
            <Text as='h3' fontSize='2xl' marginBottom='20px'>
                Your Order
            </Text>
            <Flex
                justifyContent='space-between'
                padding='20px'
                bg='#f8f8f8'
            >
                <Text fontWeight='bold'>Product</Text>
                <Text fontWeight='bold'>Total</Text>
            </Flex>
            {state.theme.cart.items.map((item, index) => {
                return (
                    <OrderReviewItem
                        key={item.productId}
                        item={item}
                        index={index}
                    />
                );
            })}
            <Flex
                justifyContent='space-between'
                padding='20px'
                marginBottom='20px'
                bg='#f8f8f8'
            >
                <Text fontWeight='bold'>Total</Text>
                <Text fontWeight='bold'>${state.theme.cart.cartTotal}</Text>
            </Flex>
            <Button 
                w='100%'
                variantColor='teal'
                onClick={actions.theme.placeOrder}
                isLoading={state.theme.processingOrder}
                loadingText='Processing...'
            >
                Place Order
            </Button>
        </Box>
    )
}

export default connect(OrderReview)