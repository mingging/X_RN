import colors from '@assets/colors';
import Pretendard from '@assets/fonts';
import React, { useCallback, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { hasNotch } from 'react-native-device-info';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Modal from 'react-native-modal';
import AuthNumberPad from './containers/AuthNumberPad';

// type Props = {
//     modalVisible: boolean;
//     toggleModal: () => void;
// };

const Register = () => {


    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    }

    return (
        <View style={{ flex: 1 }}>
            <KeyboardAwareScrollView
                bounces={false}
                style={{ flex: 1 }}
                contentContainerStyle={{
                    paddingTop: 30,
                    paddingHorizontal: 20,
                }}
            >
                <View>
                    <Text style={[
                        Pretendard.SemiBold,
                        {
                            fontSize: 18,
                            color: colors.C9C9C9,
                            lineHeight: 24,
                            // marginTop: 20
                        }
                    ]}>
                        X의 회원이 되어{`\n`}
                        3억명 이상의 유저와 소통해보세요
                    </Text>
                    <Text style={[
                        Pretendard.Medium,
                        {
                            fontSize: 14,
                            color: colors[444444],
                            lineHeight: 18,
                            marginTop: 10,

                        }
                    ]}>
                        X의 회원이 되어 특별한 혜택과 함께 전 세계 3억명 이상의 유저와 소통해보세요!
                        회원 전용 할인, 이벤트, 그리고 다양한 독점 콘텐츠를 지금 바로 만나보세요.
                        X와 함께 더 나은 경험을 시작하세요!
                    </Text>
                </View>
                <View>
                    {/* 이메일 */}
                    <TextInput
                        // onChangeText={onEmailTextChanged}
                        style={{
                            marginTop: 20,
                            backgroundColor: colors['141414'],
                            color: colors.FFFFFF,
                            paddingHorizontal: 14,
                            height: 48,
                        }}
                        placeholder="이메일"
                        keyboardType="email-address"
                        placeholderTextColor={colors['666666']}
                    />
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <TouchableOpacity>
                            <View
                                style={{
                                    backgroundColor: colors['141414'],
                                    paddingHorizontal: 25,
                                    height: 48,
                                    marginRight: 10,
                                    flex: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <Text style={[
                                    Pretendard.Regular,
                                    {
                                        fontSize: 18,
                                        color: colors.FFFFFF,
                                        lineHeight: 24,
                                    }
                                ]}>+82</Text>
                            </View>
                        </TouchableOpacity>
                        {/* 휴대폰 번호 */}
                        <TextInput
                            // onChangeText={onEmailTextChanged}
                            style={{
                                backgroundColor: colors['141414'],
                                color: colors.FFFFFF,
                                paddingHorizontal: 14,
                                height: 48,
                                flex: 2
                            }}
                            placeholder="휴대폰 번호"
                            keyboardType="phone-pad"
                            placeholderTextColor={colors['666666']}
                        />
                    </View>
                    <TouchableOpacity
                        onPress={toggleModal}
                        style={{
                            marginTop: 10,
                            backgroundColor: colors[262626],
                            paddingHorizontal: 14,
                            height: 48,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <Text
                            style={[
                                Pretendard.Regular,
                                {
                                    fontSize: 16,
                                    color: colors[666666],
                                },
                            ]}
                        >인증번호 보내기</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', marginTop: 10, }}>
                        <TextInput
                            style={{
                                backgroundColor: colors['141414'],
                                color: colors.FFFFFF,
                                paddingHorizontal: 14,
                                height: 48,
                                marginRight: 10,
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                            placeholder="닉네임"
                            keyboardType="phone-pad"
                            placeholderTextColor={colors['666666']}
                        />
                        <TouchableOpacity
                            style={{
                                backgroundColor: colors[262626],
                                paddingHorizontal: 14,
                                height: 48,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                            <Text
                                style={[
                                    Pretendard.Regular,
                                    {
                                        fontSize: 16,
                                        color: colors[666666],
                                    },
                                ]}
                            >중복확인</Text>
                        </TouchableOpacity>
                    </View>
                    {/* 성명 */}
                    <TextInput
                        // onChangeText={onEmailTextChanged}
                        style={{
                            marginTop: 10,
                            backgroundColor: colors['141414'],
                            color: colors.FFFFFF,
                            paddingHorizontal: 14,
                            height: 48,
                        }}
                        placeholder="성명"
                        keyboardType="default"
                        placeholderTextColor={colors['666666']}
                    />
                    {/* 생년월일 */}
                    <TextInput
                        // onChangeText={onEmailTextChanged}
                        style={{
                            marginTop: 10,
                            backgroundColor: colors['141414'],
                            color: colors.FFFFFF,
                            paddingHorizontal: 14,
                            height: 48,
                        }}
                        placeholder="생년월일(YYYYMMDD)"
                        keyboardType="default"
                        placeholderTextColor={colors['666666']}
                    />
                    <TouchableOpacity
                        style={{
                            marginTop: 10,
                            backgroundColor: colors[262626],
                            paddingHorizontal: 14,
                            height: 48,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <Text
                            style={[
                                Pretendard.Regular,
                                {
                                    fontSize: 16,
                                    color: colors[666666],
                                },
                            ]}
                        >가입에 필요한 정보를 입력해주세요!</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            marginTop: 10,
                            paddingHorizontal: 14,
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: 32
                        }}>
                        <Text
                            style={[
                                Pretendard.SemiBold,
                                {
                                    fontSize: 14,
                                    color: colors.C9C9C9,
                                },
                            ]}
                        >도움이 필요하신가요?</Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        paddingHorizontal: 20,
                        paddingBottom: hasNotch() ? 30 : 12,
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                    }}>
                    <Text
                        style={[
                            Pretendard.SemiBold,
                            {
                                fontSize: 14,
                                color: colors['262626'],
                                textAlign: 'center',
                            },
                        ]}>
                        © 2024 X Corp.
                    </Text>
                </View>
                <Modal
                    isVisible={isModalVisible}
                    onSwipeComplete={toggleModal}
                    swipeDirection={['down']}
                    style={{
                        justifyContent: 'flex-end',
                        margin: 0,
                    }}
                >
                    <View style={{
                        backgroundColor: colors['111111'],
                        padding: 20,
                        height: 296
                    }}>
                        <Text style={[
                            Pretendard.SemiBold,
                            {
                                fontSize: 18,
                                color: colors.FFFFFF,
                                marginBottom: 30
                            }
                        ]}>인증코드를 입력해주세요</Text>
                        <AuthNumberPad />
                        <TouchableOpacity style={{
                            backgroundColor: colors.FFFFFF,
                            height: 48,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 30
                        }}>
                            <Text style={[
                                Pretendard.SemiBold,
                                {
                                    fontSize: 16,
                                    color: colors[262626],
                                },
                            ]}>인증하기</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </KeyboardAwareScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    contentContainer: {
        backgroundColor: 'white',
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    contentTitle: {
        fontSize: 20,
        marginBottom: 12,
    },
});

export default Register;