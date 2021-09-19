import React, {useState} from 'react';
import { StatusBar, 
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';

import { Button } from '../../components/Button';
import theme from '../../styles/theme';

import { Input } from '../../components/Input';
import { InputPassword } from '../../components/InputPassword';

import {
    Container,
    Header,
    Title,
    SubTitle,
    Footer,
    Form
   } from './styles';

export function SignIn(){

    const [email, setEmail] = useState('');
    const [password, setPasword] = useState('');

    return (
        <KeyboardAvoidingView behavior="position" enabled>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Container>
                    <StatusBar 
                    barStyle="dark-content"
                    backgroundColor="transparent"
                    translucent
                    />
                    <Header>
                        <Title>Estamos{'\n'}Quase lá</Title>
                        <SubTitle>
                        Faça seu login para começarm {'\n'}
                        uma experiência incrível.
                        </SubTitle>
                    </Header>
                    <Form>
                        <Input 
                        iconName="mail"
                        placeholder="email"
                        keyboardType="email-address"
                        autoCorrect={false}
                        autoCapitalize="none"
                        onChangeText={setEmail}
                        value={email}
                        />

                        
                        <InputPassword 
                            iconName="lock"
                            placeholder="Senha"
                            onChangeText={setPasword}
                            value={password}
                        />
                    </Form>

                    <Footer>

                        
                        <Button 
                        title="Login"
                        onPress={() => {}}
                        enable={false}
                        loading={false}
                        />
                        <Button 
                        title="Criar conta Gratuita"
                        color= {theme.colors.background_secondary}
                        onPress={() => {}}
                        enable={false}
                        loading={false}
                        light
                        />
                    </Footer>
                    
                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}