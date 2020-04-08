import React from 'react';
import { Box, Text, Image } from '@chakra-ui/core';
import Anchor from '../anchor';
import FeaturedMedia from '../featured-media';


const Item = ({ item }) => {
    return (
        <Box maxW='sm' borderWidth='1px' rounded='5px' overflow='hidden'>
            <Anchor link={item.link}>
                <FeaturedMedia id={item.featured_media}/>
                <Box p='2'>
                    <Text fontSize='lg' fontWeight='bold'>
                        {item.title.rendered}
                    </Text>
                    <Text fontSize='lg' textAlign='right'>
                        {item.price}
                    </Text>
                </Box>
            </Anchor>
        </Box>
    )
}

export default Item