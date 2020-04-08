import React, { useState } from 'react';
import { Grid, Box, Button, Flex, Image } from '@chakra-ui/core';
import { connect, styled } from 'frontity';
import ProductImageGallery from './product-image-gallery';
import FeaturedMedia from '../featured-media';

const ProductImage = ({ state }) => {
    const data = state.source.get(state.router.link);
    const { 
        featured_media, 
        product_image_gallery 
    } = state.source[data.type][data.id];

    const [imageId, setImageId] = useState(featured_media);
    
    const media = state.source.attachment[imageId];
    if (!media) return null;

    const [style, setStyle] = useState({
        backgroundImage: `url(${media.source_url})`,
        backgroundPosition: '0% 0%'
    });

    const handleMouseMove = e => {
        let { left, top, width, height } = e.target.getBoundingClientRect();
        let x = (e.pageX - left) / width * 100;
        let y = (e.pageY - top) / height * 100;
        setStyle({ ...style, backgroundPosition: `${x}% ${y}%` });
    }

    const onChangeImage = newImageId => {
        setImageId(newImageId);
        let background = state.source.attachment[newImageId].source_url;
        setStyle({ ...style, backgroundImage: `url(${background})` });
    };

    return (
        <Box>
            <Figure onMouseMove={handleMouseMove} style={style}>
                <FeaturedMedia id={imageId} />
            </Figure>
            {
                '' !== product_image_gallery &&
                <ProductImageGallery onChangeImage={onChangeImage} />
            }
        </Box>
    );
}
export default connect(ProductImage);

const Figure = styled.figure`
    background-repeat: no-repeat;
    height: 500px;
    border: 1px solid #dddddd;
    & img {
        width: auto;
        height: 100%;
        object-fit: cover;
    }
    
    &:hover img {
        opacity: 0;
    }
`;