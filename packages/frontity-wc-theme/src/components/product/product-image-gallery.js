import React from 'react';
import { connect, styled } from 'frontity'
import FeaturedMedia from '../featured-media';

const ProductImageGallery = ({ state, onChangeImage }) => {
    const data = state.source.get(state.router.link);
    const { 
        featured_media, 
        product_image_gallery 
    } = state.source[data.type][data.id];

    const galleryItems = product_image_gallery.split`,`.map(x => +x);

    galleryItems.unshift(featured_media)

    const handleClick = e => onChangeImage(e.id);

    return (
        <Gallery>
            {galleryItems.map(id => {
                return (
                    <Figure 
                        key={id} 
                        onClick={e => handleClick({ e, id })}
                    >
                        <FeaturedMedia id={id} />
                    </Figure>
                )
            })}
        </Gallery>
    )
}
export default connect(ProductImageGallery);

const Gallery = styled.div`
    margin-top: 10px;
    width: 100%;
    height: 50px;
`;
const Figure = styled.figure`
    display: inline-block;
    border: 1px solid #dddddd;
    margin-right: 10px;
    width: 50px;
    height: 50px;
    position: relative;
    & img {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    } 
`;