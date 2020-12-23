import React from 'react';
import logoImg from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
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
            <Form onSubmit={() => {}}>
                <FormTitle>Entrar</FormTitle>
                <Input 
                    type="email"
                    required
                    placeholder="E-mail"
                />
                <Input 
                    type="password"
                    required
                    placeholder="Senha"

                />
                <Button type="submit">Acessar</Button>
            </Form>
        </Container>
    );
}

export default SignIn;