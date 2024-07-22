import React, { useState, useCallback } from 'react';
import Register from '../Register';

const RegisterContainer = () => {

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = useCallback(() => {
        setModalVisible(!isModalVisible);
    }, [])

    return (
        <Register
            modalVisible={isModalVisible}
            toggleModal={toggleModal}
        />
    )
};

export default RegisterContainer;