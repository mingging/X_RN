import React from "react";
import { FlatList, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { countryCodes } from "./CountryCodes";

type Props = {
    isShowCountryCodeModal: boolean;
    onShowCountryModal: () => void;
    onSelectedCountryCode: (code: string) => void;
}

const renderItem = (
    item: { label: string; value: string; }, 
    onShowCountryModal: () => void, 
    onSelectedCountryCode: (code: string) => void) => (
    <TouchableOpacity
        style={styles.item}
        onPress={() => {
            onSelectedCountryCode(item.value);
            // setSelectedCode(item.value);
            onShowCountryModal();
        }}
    >
        <Text style={styles.itemText}>{item.label}</Text>
    </TouchableOpacity>
);

const CountryCodeModal = ({
    isShowCountryCodeModal,
    onShowCountryModal,
    onSelectedCountryCode
}: Props) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isShowCountryCodeModal}
            onRequestClose={onShowCountryModal}
        // onRequestClose={() => {
        //     setModalVisible(!modalVisible);
        // }}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <FlatList
                        data={countryCodes}
                        renderItem={({ item }) => 
                            renderItem(item, onShowCountryModal, onSelectedCountryCode)}
                        keyExtractor={(item) => item.value}
                    />
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 16,
        maxHeight: '80%',
    },
    item: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    },
    itemText: {
        fontSize: 16,
    },
});

export default CountryCodeModal;