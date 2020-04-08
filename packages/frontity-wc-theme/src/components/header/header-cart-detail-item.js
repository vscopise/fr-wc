import React from 'react';
import { Flex, Text } from '@chakra-ui/core';
import { FaTrash } from 'react-icons/fa';
import { connect } from 'frontity';

const LoadingProduct = () => (
    <Flex fontSize='0.8em'>
        <Text>Loading...</Text>
    </Flex>
)

const HeaderCartDetailItem = ({ state, actions, item }) => {

    if (state.source.product) {
        const product = state.source.product[item.productId];
        if (product) {
            return (
                <Flex
                    justifyContent='space-between'
                    fontSize='0.8em'
                >
                    <Text>
                        {product.title.rendered}
                        {
                            item.quantity > 1
                                ? <Text as='span'> (x{item.quantity})</Text>
                                : null
                        }
                    </Text>
                    <Flex>
                        <Text as='span'>${product.price}</Text>
                        <Text
                            padding='5px'
                            cursor='pointer'
                            onClick={event => actions.theme.trashCartItem({
                                event, productId: item.productId
                            })}
                        >
                            <FaTrash size='10px' />
                        </Text>
                    </Flex>
                </Flex>
            );
        } else { return <LoadingProduct />; }
    } else { return <LoadingProduct />; }
}

export default connect(HeaderCartDetailItem);