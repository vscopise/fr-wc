import React from 'react';
import { Box } from '@chakra-ui/core';

const ProductContentItem2 = ({ title, content, price }) => {
    const fontSize = price ? '1.2em' : '0.9em';
    const html = `${price ? '$' : ''}${content}`;
    return (
        <>
            {title && <div>title</div>}
            <Box
                fontSize={fontSize}
                borderBottom='1px solid #eee'
                paddingBottom='10px'
                marginBottom='10px'
                dangerouslySetInnerHTML={{ __html: html }}
            />
        </>
    )
};

export default ProductContentItem2;