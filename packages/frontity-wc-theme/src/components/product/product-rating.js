import React from 'react';
import { styled } from 'frontity';

const ProductRating = ({ average, rating }) => {

    //const { count : nocount} = rating
    //const count = 3;
    const [count, norating] = Object.entries(rating)[0];
    const valuation = count > 0 ? 'val' : 'noval'

    /* const [count, norating] = [0, 0]
    if (!rating || !rating.length) {
        [count, norating] = Object.entries(rating)[0];
    } else {
        [count, norating] = Object.entries(rating)[0];
        const valuation = count > 0 ? 'val' : 'noval'
        count = 0
    } */


    //const valuation = count > 0 ? 'val' : 'noval'

    //{[...Array(4)].map(i => { return <FaStar style='display: inline' /> })}

    return (
        <Container>
            <StarRating>
                <span style={{ width: `${20 * average}%` }}></span>
            </StarRating>
            <Based>{`(${count} ${valuation}`}</Based>
        </Container>
    )
};
export default ProductRating;

const Container = styled.div`
    display: flex;
`;

const StarRating = styled.div`
    overflow: hidden;
    position: relative;
    height: 1.618em;
    line-height: 1.618;
    font-size: 1em;
    width: 6em;
    font-weight: 400;
    &:before{
        content: "\\f005\\f005\\f005\\f005\\f005";
        font-family: "Font Awesome 5 Pro";
        opacity: 0.25;
        float: left;
        position: absolute;
        top: 0;
        left: 0;
        font-weight: 700;
    }
    & span {
        overflow: hidden;
        float: left;
        position: absolute;
        left: 0;
        top: 0;
        padding-top: 1.5em;
        &:before{
           content: "\\f005\\f005\\f005\\f005\\f005";
           font-family: "Font Awesome 5 Pro";
           position: absolute;
           top: 0;
           left: 0;
           color: #96588a;
           font-weight: 700;
        }
    }
`;

const Based = styled.div`
    margin-left: 0.5em;
`;