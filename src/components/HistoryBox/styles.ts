import styled from 'styled-components';

interface ILegendProps {
    color: string;
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};
    border-radius: 7px;
    margin: 10px 0;
    padding: 30px 20px;
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
`;