import React from 'react';
import { Box, Grid, Button, Flex, Image, Text } from '@chakra-ui/core';
import { connect } from 'frontity';

const CartTotal = ({ state, actions }) => {
    return (
        <Flex flexDirection='row-reverse' margin='20px 0'>
            <Box w='50%'>
                <Text as='h3' fontSize='3xl'>
                    Cart totals
                </Text>
                <Grid templateColumns='50% 50%' margin='20px 0'>
                    <Box>Total</Box>
                    <Box>{state.theme.cart.cartTotal}</Box>
                </Grid>
                <Button variantColor='teal' onClick={() => { actions.router.set('/checkout/') }}>
                    Proceed to checkout
                </Button>
            </Box>
        </Flex>
    )
}

export default connect(CartTotal);