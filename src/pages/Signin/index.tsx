import React from 'react';
import logoImg from '../../assets/logo.svg';
import { 
    Container,
    Logo,
    Form,
    FormTitle,
} from './styles';

const SignIn: React.FC = () => {
    return (
        <Container>
            <Logo>
                <img src={logoImg} alt="Carteira"/>
                <h2>Carteira</h2>
            </Logo>
            <Form>
                <FormTitle>Entrar</FormTitle>
                <input type="text" />
                <input type="text" />
                <button type="submit">Acessar</button>
            </Form>
        </Container>
    );
}

export default SignIn;