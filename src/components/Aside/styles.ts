import styled from 'styled-components';

export const Container = styled.div`
    grid-area: AS;
    background: ${props => props.theme.colors.secondary};
    padding-left: 20px;
    border-right: 1px solid ${props => props.theme.colors.gray};
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    height: 70px;
`;

export const LogoImg = styled.img`
    height: 40px;
    width: 40px;
`;

export const Title = styled.h3`
    color: ${props => props.theme.colors.white};
    margin-left: 10px;
`;

export const MenuContainer = styled.nav`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    margin-left: 20px;
`;

export const MenuItemLink = styled.a`
    display: flex;
    align-items: center;
    color: ${props => props.theme.colors.info};
    text-decoration: none;
    transition: opacity .3s;
    margin: 10px 0;

    &:hover {
        opacity: .7;
    }

    > svg {
        font-size: 20px;
        margin-right: 5px;
    }
`;

export const MenuItemButton = styled.button`
    display: flex;
    align-items: center;
    color: ${props => props.theme.colors.info};
    text-decoration: none;
    transition: opacity .3s;
    margin: 10px 0;
    font-size: 16px;
    border: none;
    background: none;

    &:hover {
        opacity: .7;
    }

    > svg {
        font-size: 20px;
        margin-right: 5px;
    }
`;
