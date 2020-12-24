import React from 'react';
import CountUp from 'react-countup';
import dolarImg from '../../assets/dolar.svg';
import { Container } from './styles';

interface IWalletBoxTotal {
    title: string;
    amount: number;
    footerlabel: string;
    color: string;
}

const WalletBoxTotal: React.FC<IWalletBoxTotal> = ({
    title,
    amount,
    footerlabel,
    color
}) => (
    <Container color={color}>
        <span>{title}</span>
        <h1>
            <strong>R$ </strong>
            <CountUp
                end={amount} // Número para parar bibliote encerrar.
                separator="." // Separador de milhar.
                decimal="," // Separador de casas decimais.
                decimals={2} // Informa quantas casas decimais vai ter.
                preserveValue={true} // Opcional.
            />
        </h1>
        <small>{footerlabel}</small>
        <img src={dolarImg} alt={title} />
    </Container>
);

export default WalletBoxTotal;