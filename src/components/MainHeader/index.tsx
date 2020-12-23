import React, { useMemo, useState } from 'react';
import { useTheme } from '../../hooks/theme';
import emojis from '../../utils/emojis';
import Toggle from '../Toggle';
import {
    Container,
    Profile,
    Welcome,
    UserName
} from './styles';

const MainHeader: React.FC = () => {
    const { toggleTheme, theme } = useTheme();
    const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false);
    const emoji = useMemo(() => {
        const indece = Math.floor(Math.random() * emojis.length);
        return emojis[indece];
    },[]);

    const handleChangeTheme = () => {
        setDarkTheme(!darkTheme);
        toggleTheme();
    }
    return (
        <Container>
            <Toggle 
                labelLeft = "Light"
                labelRight = "Dark"
                checked = {darkTheme}
                onChange = {handleChangeTheme}
            />
            <Profile>
                <Welcome>olá, {emoji}</Welcome>
                <UserName>Alexsandro Euzebio da Silva</UserName>
            </Profile>
        </Container>
    );
}

export default MainHeader;