import React from 'react';
import { Grid } from '@chakra-ui/core';
import { connect } from 'frontity';
import Item from './list-item';

const ProductArchive = ({ state }) => {
    const data = state.source.get(state.router.link);
    //console.log(data);
    console.log(state.router.link)
    return (
        <Grid templateColumns='repeat(5, 1fr)' gap={2}>
            {data.items.map(({ type, id}) => {
                const item = state.source[type][id];
                return <Item key={item.id} item={item} />
//            return <div key={item.id}>{item.id}</div>
            })}
        </Grid>
    )
}

export default connect(ProductArchive);