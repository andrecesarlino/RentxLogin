import React from 'react';
import {KeyboardAvoidingView,
        TouchableWithoutFeedback,
        Keyboard
} from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { BackButton } from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';
import { useTheme } from 'styled-components';

import {
 Container,
 Header,
 Steps,
 Title,
 SubTitle,
 Form,
 FormTitle
} from './styles';
import { InputPassword } from '../../../components/InputPassword';
import { Button } from '../../../components/Button';

export function SecondStep(){
    const theme = useTheme();

    const navigation = useNavigation();

    function handleBack() {
        navigation.goBack();
    }

return (
    <KeyboardAvoidingView behavior="position" enabled>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
            <Header>
                <BackButton onPress={handleBack}/>
                <Steps>
                    <Bullet />
                    <Bullet active/>
                </Steps>
            </Header>

            <Title>
                Crie sua{'\n'}conta
            </Title>
            <SubTitle>
                Faça seu cadastro{'\n'}
                forma rápida e fácil
            </SubTitle>

            <Form>
                <FormTitle>2. Senha</FormTitle>
                <InputPassword 
                    iconName="lock"
                    placeholder="Senha"
                />
                <InputPassword 
                    iconName="lock"
                    placeholder="Repetir Senha"
                />
                <Button
                    title="Cadastrar"
                    color={theme.colors.success}
                />
            </Form>
        </Container>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    );
}