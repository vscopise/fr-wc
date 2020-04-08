import React from 'react';
import { Box, Link, Text } from '@chakra-ui/core';
import { connect } from 'frontity';
import Anchor from '../anchor';
import HeaderCart from './header-cart';

const NavLink = ({ children, ...props }) => (
    <Anchor px={2} fontWeight='bold' textTransform='uppercase' link={props.link} {...props}>
        {children}
    </Anchor>
);

const Navigation = ({ state }) => {

    return (
        <Box>
            {state.theme.menu.map(([name, link]) => {
                return (
                    <NavLink link={link} key={name}>
                        {name}
                    </NavLink>
                )
            })}
            <HeaderCart />
        </Box>
    );
}

export default connect(Navigation);