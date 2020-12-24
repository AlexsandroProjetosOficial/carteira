import styled, { keyframes } from 'styled-components';

interface IContainerProps {
    color: string;
}

const animate = keyframes`
    
    0% {
        transform: translateY(-150px);
        opacity: 0;
    }

    50% {
        opacity: .5;
    }

    100% {
        transform: translateY(0);
        opacity: 1;
    }
`;

export const Container = styled.div<IContainerProps>`
    width: 100%;
    height: 150px;
    margin: 10px 0;
    padding: 10px 20px;
    position: relative;
    border-radius: 7px;
    overflow: hidden;
    background-color: ${props => props.color};
    color: ${props => props.theme.colors.black};
    animation: ${animate} .5s;
    
    > img {
        position: absolute;
        height: 110%;
        top: -10px;
        right: -30px;
        opacity: .3;
    }

    > span {
        font-size: 20px;
        font-weight: 500;
    }

    > h1 {
        font-size: 40px;
        font-weight: 500;
    }

    > small {
        font-size: 12px;
        position: absolute;
        bottom: 10px;
    }

    @media(max-width: 420px){
        width: 100%;

        > h1 {
            display: flex;

            > strong {
                position: initial;
                width: auto;
                font-size: 22px;
            }

            > strong::after {
                display: inline-block;
                content: '';
                width: 1px;
            }
        }
    }
`;