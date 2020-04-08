import React from 'react';
import { Box, CSSReset, theme, ThemeProvider } from '@chakra-ui/core';
import { Head } from 'frontity';
import Header from './header';
import Main from './main';
import ModalNotification from './modal-notification';

const Theme = () => (
    <ThemeProvider theme={{ ...theme }}>
        <Head>
            <title>Frontity Woocommerce Theme</title>
            <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.1/css/all.css"></link>
        </Head>
        <CSSReset />
        <Box
            width={[
                '1160px',
            ]}
            margin='0 auto'
            maxWidth='90%'
        >
            <Header />
            <Main />
        </Box>
        <ModalNotification />
    </ThemeProvider>
)

export default Theme;