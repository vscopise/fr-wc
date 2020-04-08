import React from 'react';
import { Box, Image, Link, Flex, Text } from '@chakra-ui/core';
//import { state, connect } from 'frontity';
import { animated, useSpring } from 'react-spring';
import Navigation from './navigation';
import Iso from '../../assets/iso.svg';

const FixedNavbar = ({title}) => {

    const settings = {
        position: 'fixed',
        zIndex: '10',
        top: '0',
        left: '0',
        padding: '10px 0',
        width: '100%',
        background: '#fff',
        paddingBottom: '10px',
        WebkitBoxShadow: '0 4px 6px -6px #222',
        MozBoxShadow: '0 4px 6px -6px #222',
        boxShadow: '0 4px 6px -6px #222',
    }

    const animateStyle = useSpring({ 
        transform: 'translate3d(0,0px,0)', 
        from: {...settings, transform: 'translate3d(0,-30px,0)' }
    });

    return (
        <animated.div style={animateStyle}>
            <Flex
                w="100%"
                px={5}
                py={4}
                justifyContent="flex-start"
                alignItems="center"
            >
                <Flex
                    flexDirection="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Link src='/' marginRight='40px'>
                        <Image
                            src={Iso}
                            height={30}
                            title={title}
                            ignoreFallback={true}
                        />
                    </Link>
                </Flex>
                <Navigation />
            </Flex>
        </animated.div>
    )
}

export default FixedNavbar;