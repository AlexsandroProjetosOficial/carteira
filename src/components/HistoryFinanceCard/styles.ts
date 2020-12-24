import styled, { keyframes } from 'styled-components';

interface ITagProps {
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

export const Container = styled.li`
    position: relative;
    background-color: ${props => props.theme.colors.tertiary};
    list-style: none;
    border-radius: 10px;
    margin: 10px 0;
    padding: 12px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    transition: all .3s;
    animation: ${animate} .5s ease;

    &:hover {
        opacity: .7;
        transform: translateX(10px);
    }

    > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-left: 10px;
        > span {
            font-size: 22px;
            font-weight: 500;
        }
    }
`;


export const Tag = styled.div<ITagProps>`
    position: absolute;
    left: 0;
    width: 13px;
    height: 60%;
    background-color: ${props => props.color};
`;