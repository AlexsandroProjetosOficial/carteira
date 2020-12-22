import React from 'react';
import CountUp from 'react-countup';
import dolarImg from '../../assets/dolar.svg';
import arrowDownImg from '../../assets/arrow-down.svg';
import arrowUpImg from '../../assets/arrow-up.svg';
import { Container } from './styles';

interface IWalletBoxProps {
    title: string;
    amount: number;
    footerlabel: string;
    icon: 'dolar' | 'arrowUp' | 'arrowDown';
    color: string;
}

const WalletBox: React.FC<IWalletBoxProps> = ({
    title,
    amount,
    footerlabel,
    icon,
    color
}) => {
    /* 
    * Verificar a opção para fazer com useMemo.
    */
    const iconSelected = (icon: string) => {
        switch (icon) {
            case 'dolar':
                return dolarImg;
            case 'arrowUp':
                return arrowUpImg;
            case 'arrowDown':
                return arrowDownImg;
            default:
                return undefined;
        }
    }
    return (
        <Container color={color}>
            <span>{title}</span>
            <h1>
                <CountUp 
                    end = {amount} // Número para parar bibliote encerrar.
                    prefix = {"R$ "} // Coloca o sifrão da moeda BR.
                    separator = "." // Separador de milhar.
                    decimal = "," // Separador de casas decimais.
                    decimals = {2} // Informa quantas casas decimais vai ter.
                    preserveValue = {true} // Opcional.
                />
            </h1>
            <small>{footerlabel}</small>
            <img src={iconSelected(icon)} alt={title}/>
        </Container>
    );
}

export default WalletBox;