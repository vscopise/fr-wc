import React, { useRef } from 'react';
import {
    Alert,
    Badge,
    Box,
    Button,
    Modal,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    ModalOverlay,
    ModalContent,
    AlertIcon
} from '@chakra-ui/core';

import { connect } from 'frontity';

const ModalNotification = ({ state, actions }) => {
    const initialRef = useRef();
    const finalRef = React.useRef();
    return (
        <Modal
            isOpen={state.theme.showModal}
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isCentered
        >
            <ModalOverlay />
            <ModalContent
                padding='20px'
                maxWidth='60%'
            >
                <ModalCloseButton
                    onClick={actions.theme.closeModal}
                    size='sm'
                />
                <ModalBody
                    textAlign='center'
                    alignItems='baseline'
                >
                    <Alert
                        status='success'
                        justifyContent='center'
                        fontSize='1.2em'
                        background='white'
                    >
                        <AlertIcon size='1.5em' />
                        {state.theme.modalContent}
                    </Alert>
                </ModalBody>

                <ModalFooter justifyContent='center'>
                    <Button
                        variantColor="blue"
                        mr={3}
                        onClick={actions.theme.closeModal}
                        ref={initialRef}
                    >
                        Continue Shopping
                    </Button>
                    {
                        state.theme.goCart && 
                        <Button
                            variantColor="green"
                            onClick={actions.theme.goCart}
                        >
                            View Cart
                        </Button>
                    }
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}
export default connect(ModalNotification);