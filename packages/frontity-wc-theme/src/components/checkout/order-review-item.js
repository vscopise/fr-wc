import React from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/core';
import { FaTrash } from 'react-icons/fa';
import { connect } from 'frontity';

const LoadingProduct = () => (
    <Flex fontSize='0.8em'>
        <Text>Loading...</Text>
    </Flex>
)

const OrderReviewItem = ({ state, actions, item, index }) => {

    if (state.source.product) {
        const product = state.source.product[item.productId];
        if (product) {
            const bg = index % 2 === 0 ? '#fdfdfd' : '#fbfbfb';
            const subTotal = item.quantity * product.price;
            return (
                <Flex
                    justifyContent='space-between'
                    padding='20px'
                    bg={bg}
                >
                    <Text>
                        {product.product_name}
                        {
                            item.quantity > 1
                                ? <Text as='span'> x{item.quantity}</Text>
                                : null
                        }
                    </Text>
                    <Flex>
                        <Text as='span'>${subTotal}</Text>
                    </Flex>
                </Flex>
            );
        } else { return <LoadingProduct />; }
    } else { return <LoadingProduct />; }
}

export default connect(OrderReviewItem);