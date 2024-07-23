import colors from '@assets/colors';
import React, { useRef } from 'react';
import { View, TextInput, StyleSheet, NativeSyntheticEvent, TextInputKeyPressEventData } from 'react-native';

const AuthNumberPad = () => {
    const input1 = useRef<TextInput>(null);
    const input2 = useRef<TextInput>(null);
    const input3 = useRef<TextInput>(null);
    const input4 = useRef<TextInput>(null);
    const input5 = useRef<TextInput>(null);
    const input6 = useRef<TextInput>(null);

    const handleInputChange = (text: string, nextRef: React.RefObject<TextInput>, prevRef: React.RefObject<TextInput>) => {
        if (text.length === 1 && nextRef.current) {
            nextRef.current.focus();
        }
        if (text.length === 0 && prevRef.current) {
            prevRef.current.focus();
        }
    };

    const handleKeyPress = (e: NativeSyntheticEvent<TextInputKeyPressEventData>, prevRef: React.RefObject<TextInput>) => {
        if (e.nativeEvent.key === 'Backspace' && prevRef.current) {
            prevRef.current.focus();
        }
    };
    return (
        <View style={styles.container}>
            <TextInput
                ref={input1}
                style={styles.input}
                maxLength={1}
                keyboardType="number-pad"
                onChangeText={(text) => handleInputChange(text, input2, input1)}
                onKeyPress={(e) => handleKeyPress(e, input1)}
            />
            <TextInput
                ref={input2}
                style={styles.input}
                maxLength={1}
                keyboardType="number-pad"
                onChangeText={(text) => handleInputChange(text, input3, input1)}
                onKeyPress={(e) => handleKeyPress(e, input1)}
            />
            <TextInput
                ref={input3}
                style={styles.input}
                maxLength={1}
                keyboardType="number-pad"
                onChangeText={(text) => handleInputChange(text, input4, input2)}
                onKeyPress={(e) => handleKeyPress(e, input2)}
            />
            <TextInput
                ref={input4}
                style={styles.input}
                maxLength={1}
                keyboardType="number-pad"
                onChangeText={(text) => handleInputChange(text, input5, input3)}
                onKeyPress={(e) => handleKeyPress(e, input3)}
            />
            <TextInput
                ref={input5}
                style={styles.input}
                maxLength={1}
                keyboardType="number-pad"
                onChangeText={(text) => handleInputChange(text, input6, input4)}
                onKeyPress={(e) => handleKeyPress(e, input4)}
            />
            <TextInput
                ref={input6}
                style={styles.input}
                maxLength={1}
                keyboardType="number-pad"
                onChangeText={(text) => handleInputChange(text, input6, input5)}
                onKeyPress={(e) => handleKeyPress(e, input5)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // padding: 5,
        // margin: 2  
    },
    input: {
        borderBottomWidth: 3,
        borderColor: colors['FFFFFF'],
        padding: 10,
        textAlign: 'center',
        fontSize: 42,
        width: 52,
        color: colors['FFFFFF'],
        fontFamily: 'Pretendard-SemiBold',
    },
});

export default AuthNumberPad;