import React, { useMemo, useState } from 'react';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import WalletBox from '../../components/WalletBox';
import MessageBox from '../../components/MessageBox';
import PieChart from '../../components/PieChart';
import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';
import listOfMonths from '../../utils/months';
import happyImg from '../../assets/happy.svg';
import sadImg from '../../assets/sad.svg';
import grinningImg from '../../assets/grinning.svg';
import {
    Container,
    Content,
} from './styles';

const Dashboard: React.FC = () => {
    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
    const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());

    const years = useMemo(() => {
        let uniqueYears: number[] = [];

        [...expenses, ...gains].forEach(element => {
            const date = new Date(element.date);
            const year = date.getFullYear();

            if (!uniqueYears.includes(year)) {
                uniqueYears.push(year);
            }
        });

        return uniqueYears.map(year => {
            return {
                value: year,
                label: year,
            }
        });
    }, []);

    const months = useMemo(() => {
        return listOfMonths.map((month, index) => {
            return {
                value: index + 1,
                label: month,
            }
        })
    }, []);

    const totalExpenses = useMemo(() => {
        let total: number = 0;
        expenses.forEach(element => {
            const date = new Date(element.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            if (month === monthSelected && year === yearSelected) {
                try {
                    total += Number(element.amount);
                } catch {
                    throw new Error('Invalid amount! Amount must be number')
                }
            }
        });

        return total;
    }, [monthSelected, yearSelected]);

    const totalGains = useMemo(() => {
        let total: number = 0;
        gains.forEach(element => {
            const date = new Date(element.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            if (month === monthSelected && year === yearSelected) {
                try {
                    total += Number(element.amount);
                } catch {
                    throw new Error('Invalid amount! Amount must be number')
                }
            }
        });

        return total;
    }, [monthSelected, yearSelected]);

    const totalBlance = useMemo(() => {
        return totalGains - totalExpenses;
    }, [totalExpenses, totalGains]);

    const message = useMemo(() => {
        if (totalBlance < 0) {
            return {
                title: "Que triste!",
                icon: sadImg,
                description: "Neste mês, você gastou mais do que deveria.",
                footerText: "Verifique seus gastos e tente cortar algumas coisas desnecessárias."
            }
        } else if(totalBlance === 0) {
            return {
                title: "Ufaa!",
                icon: grinningImg,
                description: "Neste mês, você gastou exatamente o que ganhou.",
                footerText: "Tenha cuidado. No próximo tente poupar o seu dinheiro."
            }
        } else {
            return {
                title: "Muito bem!",
                icon: happyImg,
                description: "Sua carteira está positiva!",
                footerText: "Continue assim. Considere investir o seu saldo."
            }
        }
    }, [totalBlance]);

    const handleMonthSelected = (month: string) => {
        try {
            const parseMonth = Number(month);
            setMonthSelected(parseMonth);
        } catch {
            throw new Error('Invalid month value. Is accept 0 - 24.');
        }
    }

    const handleYearSelected = (year: string) => {
        try {
            const parseYear = Number(year);
            setYearSelected(parseYear);
        } catch {
            throw new Error('Invalid year value. Is accept integer numbers.');
        }
    }

    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor="#F7931B">
                <SelectInput
                    options={months}
                    defaultValue={monthSelected}
                    onChange={(e) => handleMonthSelected(e.target.value)}
                />
                <SelectInput
                    options={years}
                    defaultValue={yearSelected}
                    onChange={(e) => handleYearSelected(e.target.value)}
                />
            </ContentHeader>
            <Content>
                <WalletBox
                    title="saldo"
                    amount={totalBlance}
                    footerlabel="atualizado com base nas entradas e saídas"
                    icon="dolar"
                    color="#4E41F0"
                />

                <WalletBox
                    title="entradas"
                    amount={totalGains}
                    footerlabel="atualizado com base nas entradas e saídas"
                    icon="arrowUp"
                    color="#F7931B"
                />

                <WalletBox
                    title="saídas"
                    amount={totalExpenses}
                    footerlabel="atualizado com base nas entradas e saídas"
                    icon="arrowDown"
                    color="#E44c4E"
                />

                <MessageBox
                    title= {message.title}
                    icon={message.icon}
                    description={message.description}
                    footerText={message.footerText}
                />

                <PieChart />
            </Content>
        </Container>
    );
}

export default Dashboard;