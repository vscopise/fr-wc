import { Box, Text } from "@chakra-ui/core";

export const PageTitle = ({ text }) => (
    <Text
        as='h1'
        fontSize='4xl'
        marginBottom='20px'
        paddingBottom='20px'
        borderBottom='1px solid #e7e7e7'
    >{text}</Text>
)