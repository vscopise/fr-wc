import React from 'react';
import { Box, Spinner } from '@chakra-ui/core';

const Loader = () => {
    return (
        <Box textAlign='center'>
            <Spinner />
        </Box>
    )
}

export default Loader;