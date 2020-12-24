import styled, { keyframes } from 'styled-components';

interface ILegendProps {
    color: string;
}

const animate = keyframes`
    
    0% {
        transform: translateX(-150px);
        opacity: 0;
    }

    50% {
        opacity: .5;
    }

    100% {
        transform: translateX(0);
        opacity: 1;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};
    border-radius: 7px;
    margin: 10px 0;
    padding: 30px 20px;
    animation: ${animate} .5s;
`;

export const ChartContainer = styled.div`
    flex: 1;
    height: 260px;
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    width: 100%;

    > h2 {
        margin-bottom: 20px;
        padding-left: 20px;
    }

    @media(max-width: 1200px) {
        flex-direction: column;
    }
`;

export const LegendContainer = styled.ul`
    display: flex;
    list-style: none;
    padding-right: 20px;
`;

export const Legend = styled.li<ILegendProps>`
    display: flex;
    align-items: center;
    margin-bottom: 7px;
    margin-left: 20px;

    > div {
        background-color: ${props => props.color};
        width: 60px;
        height: 40px;
        border-radius: 5px;
        font-size: 18px;
        line-height: 40px;
        text-align: center;
    }

    > span {
        margin-left: 5px;
    }

    @media(max-width: 1280px) {
        > div {
            width: 50px;
            height: 30px;
        }
    }
`;