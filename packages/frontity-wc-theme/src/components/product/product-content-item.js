import React from 'react';
import { Box } from '@chakra-ui/core';
import { styled } from 'frontity';

const ProductContentItem = ({ props, children }) => {
    let fontSize = typeof price ? '1.2em' : '0.9em';
    let as = typeof item ? 'h1' : null;
    //let item = {item}
    return (
        <Content
            fontSize={fontSize}
            as={as}
            dangerouslySetInnerHTML={{ __html: children }}
        />
    )
}

export default ProductContentItem;

const Content = styled.div`
        font-size: ${props =>
            (props.item === 'title' && '2em')
        };
        font-weight: ${props =>
            (props.item=== 'title' && '700')
        }
`;