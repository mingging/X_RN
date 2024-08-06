import colors from "@assets/colors";
import Pretendard from "@assets/fonts";
import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

type Props = {
    email: string;
    onCompletedEmailVerificationPressed: (() => void);
}

const Email = ({
    email,
    onCompletedEmailVerificationPressed
}: Props) => {
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
                    가입을 환영합니다{'\n'}
                    이제,{'\n'}
                    이메일 인증을 완료하고{'\n'}
                    3억명 이상의 유저를 만나보세요
                </Text>
                <Text
                    style={[
                        Pretendard.SemiBold,
                        {
                            fontSize: 16,
                            color: colors.FFFFFF,
                            textAlign: 'center',
                            lineHeight: 20,
                            marginTop: 15
                        }
                    ]}
                >{email}
                    <Text
                        style={[
                            Pretendard.SemiBold,
                            {
                                fontSize: 16,
                                color: colors[666666],
                                textAlign: 'center'
                            }
                        ]}
                    >으로 {'\n'}인증 이메일을 보넀습니다</Text>
                </Text>
            </View>
            <View style={{ flex: 2, justifyContent: 'center' }}>
                <TouchableOpacity
                    onPress={onCompletedEmailVerificationPressed}
                >
                    <View style={{
                        marginTop: 30,
                        backgroundColor: colors.FFFFFF,
                        paddingHorizontal: 14,
                        marginHorizontal: 20,
                        height: 48,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={[
                            Pretendard.SemiBold,
                            {
                                fontSize: 16,
                                color: colors[262626],
                            },
                        ]}>이메일 인증 완료하기</Text>
                    </View>

                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Email;