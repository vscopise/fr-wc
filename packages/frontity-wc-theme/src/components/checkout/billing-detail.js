import React from 'react';
import { Box, Grid, Input, Text, SimpleGrid, Flex } from '@chakra-ui/core';
import { connect } from 'frontity';
import InputField from './input-field';

const BillingDetail = ({ state, actions }) => {
    return (
        <Box>
            <Text as='h3' fontSize='2xl' marginBottom='20px'>
                Billing details
            </Text>
            <Flex flexWrap='wrap'>
                {
                    state.theme.checkoutFields.map(
                        field => {
                            //const width = undefined !== field.half ? '50%' : '100%'
                            return (
                                <InputField
                                    field={field}
                                    key={field.name}
                                />
                            )
                        })
                }
            </Flex>
        </Box>
    );
}

export default connect(BillingDetail)