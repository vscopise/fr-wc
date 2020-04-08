import React from 'react';
import {
    Box,
    NumberInput,
    Grid,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Image,
    Spinner
} from '@chakra-ui/core';
import { FaTimes } from 'react-icons/fa';
import { connect } from 'frontity';
import FeaturedMedia from '../featured-media';

const CartDetailItem = ({ state, actions, item, index }) => {
    if (state.source.product) {
        const product = state.source.product[item.productId];
        const bg = index % 2 === 0 ? '#fdfdfd' : '#fbfbfb';
        if (product) {
            const subTotal = item.quantity * product.price;
            return (
                <Grid
                    templateColumns='10% 10% 50% 10% 10% 10%'
                    padding='20px 0'
                    bg={bg}
                >
                    <Box
                        padding='0 20px'
                        cursor='pointer'
                        onClick={event => actions.theme.trashCartItem({
                            event, productId: item.productId
                        })}
                    >
                        <FaTimes />
                    </Box>
                    <Box paddingRight='20px'>
                        <FeaturedMedia id={product.featured_media} />
                    </Box>
                    <Box>{product.title.rendered}</Box>
                    <Box>{product.price}</Box>
                    <Box paddingRight='20px'>
                        <NumberInput
                            defaultValue={item.quantity}
                            min={1}
                            onChange={value => actions.theme.changeCartItemQuantity({
                                quantity: value,
                                productId: item.productId
                            })}
                        >
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </Box>
                    <Box>{subTotal}</Box>
                </Grid>
            )
        } else { return <Box><Spinner /></Box> }
    } else { return <Box><Spinner /></Box> }
}
export default connect(CartDetailItem)