import React, { useState } from 'react';
import { useAuth } from '../../hooks/auth';
import logoImg from '../../assets/logo.svg';
import { 
    Container,
    Header,
    LogoImg,
    Title,
    MenuContainer,
    MenuItemLink,
    MenuItemButton,
    ToggleMenu
} from './styles';
import { 
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp,
    MdClose,
    MdMenu
} from 'react-icons/md';
const Aside: React.FC = () => {
    const { signOut } = useAuth();
    const [toggleMenuIsOpened, setToggleMenuIsOpened] = useState(false);

    const handleToggleMenu = () => {
        setToggleMenuIsOpened(!toggleMenuIsOpened);
    }

    return (
        <Container menuIsOpen={toggleMenuIsOpened}>
            <Header>
                <ToggleMenu onClick={handleToggleMenu}>
                    { toggleMenuIsOpened ? <MdClose /> : <MdMenu /> }
                </ToggleMenu>
                <LogoImg src={logoImg} alt="Logo Carteira" />
                <Title>Carteira</Title>
            </Header>
            <MenuContainer>
                <MenuItemLink href="/"> 
                    <MdDashboard />
                    Dashboard 
                </MenuItemLink>
                <MenuItemLink href="/list/entry-balance"> 
                    <MdArrowUpward />
                    Entradas 
                </MenuItemLink>
                <MenuItemLink href="/list/exit-balance"> 
                    <MdArrowDownward />
                    Saidas 
                </MenuItemLink>
                <MenuItemButton onClick={signOut}> 
                    <MdExitToApp />
                    Sair 
                </MenuItemButton>
            </MenuContainer>
        </Container>
    );
}

export default Aside;