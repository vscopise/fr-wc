import React from 'react';
import { Box, Grid, Input, Text } from '@chakra-ui/core';
import { connect } from 'frontity';

const InputField = ({ field, state, actions }) => {
    /* const field = state.theme.checkoutForm.fields.find(
        field => field.name === fieldName
    ); */
    const width = field.half ? '50%' : '100%'
    const error = !field.error
    return (
        <Box width={width}>
            <Text mb='8px'>{field.title}</Text>
            <Input
                name={field.name}
                value={field.value}
                isInvalid={field.error}
                isRequired={field.isRequired}
                isInvalid={!error}
                errorBorderColor="pink.400"
                background='pink.400'
                onChange={event => {
                    actions.theme.setCheckoutField({
                        fieldName: field.name,
                        value: event.target.value
                    })
                }}
            />
            {
                field.error
                    ? <Text color='crimson'>{field.error}</Text>
                    : null
            }
        </Box>
    )
}

export default connect(InputField)