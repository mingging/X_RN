import colors from "@assets/colors";
import Pretendard from "@assets/fonts";
import React from "react";
import { Text, View } from "react-native"

const RegisterComplete = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 3, justifyContent: 'center' }}>
                <Text style={[
                    Pretendard.SemiBold,
                    {
                        fontSize: 24,
                        lineHeight: 40,
                        color: colors.FFFFFF,
                        textAlign: 'center'
                    }
                ]}>
                    이제,{'\n'}
                    3억명 이상의 유저를 만나보세요
                </Text>
            </View>
        </View>
    )
}

export default RegisterComplete;