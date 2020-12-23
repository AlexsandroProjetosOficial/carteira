import styled, { css } from 'styled-components';

interface IContaineProps {
    menuIsOpen: boolean;
}

export const Container = styled.div<IContaineProps>`
    grid-area: AS;
    background: ${props => props.theme.colors.secondary};
    padding-left: 20px;
    border-right: 1px solid ${props => props.theme.colors.gray};
    position: relative;

    @media(max-width: 600px) {
        padding-left: 20px;
        position: fixed;
        z-index: 2;
        width: 150px;
        height: ${props => props.menuIsOpen ? '100vh' : '70px'};
        overflow: hidden;

        ${props => !props.menuIsOpen && css`
            border: none;
            border-bottom: 1px solid ${props => props.theme.colors.gray};
        `};
    }
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    height: 70px;
`;

export const LogoImg = styled.img`
    height: 40px;
    width: 40px;

    @media(max-width: 600px) {
        height: 25px;
        width: 25px;
    }
`;

export const Title = styled.h3`
    color: ${props => props.theme.colors.white};
    margin-left: 10px;

    @media(max-width: 600px) {
        display: none;
        width: 100px;
        font-size: 14px;
        margin-left: 5px;
    }
`;

export const MenuContainer = styled.nav`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
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
