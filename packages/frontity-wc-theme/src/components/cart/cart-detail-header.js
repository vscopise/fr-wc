import { Box, Grid, Button, Flex, Image, Text } from '@chakra-ui/core';

export const CartDetailHeader = () => (
    <Grid 
        templateColumns='10% 10% 50% 10% 10% 10%'
        bg='#f8f8f8'
        padding='20px 0'
    >
        <Box></Box>
        <Box></Box>
        <Box>Product</Box>
        <Box>Price</Box>
        <Box>Quantity</Box>
        <Box>Total</Box>
    </Grid>
)