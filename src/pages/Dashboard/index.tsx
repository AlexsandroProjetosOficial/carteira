import React, { useCallback, useMemo, useState } from 'react';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import WalletBox from '../../components/WalletBox';
import MessageBox from '../../components/MessageBox';
import PieChartBox from '../../components/PieChartBox';
import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';
import listOfMonths from '../../utils/months';
import happyImg from '../../assets/happy.svg';
import sadImg from '../../assets/sad.svg';
import grinningImg from '../../assets/grinning.svg';
import opsImg from '../../assets/ops.svg';
import {
    Container,
    Content,
    ContentSaldoTotal
} from './styles';
import HistoryBox from '../../components/HistoryBox';
import BarChartBox from '../../components/BarChartBox';
import WalletBoxTotal from '../../components/WalletBoxTotal';
import formatCurrency from '../../utils/formatCurrency';

const Dashboard: React.FC = () => {
    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
    const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());
    const limite = 1000.00; // Quando tiver o banco de dados criar um useState.
    const saldoLimite = String(`Saldo + limite: R$ ${formatCurrency(limite)}`);

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

    const totalGeral = useMemo(() => {
        return listOfMonths.map((_, month) => {
            let totalGainsGeral = 0;
            let totalExpensesGeral = 0;

            gains.forEach(gain => {
                const date = new Date(gain.date);
                const gainMonth = date.getMonth();
                if (gainMonth === month) {
                    totalGainsGeral += Number(gain.amount);
                }
            });

            expenses.forEach(expense => {
                const date = new Date(expense.date);
                const expenseMonth = date.getMonth();
                if (expenseMonth === month) {
                    totalExpensesGeral += Number(expense.amount);
                }
            });

            return totalGainsGeral - totalExpensesGeral;

        }).reduce((total, numero) => total + numero, 0);
    }, []);

    const saldoDisponivelMaisLimite = useMemo(() => {
        return totalGeral + limite;
    },[totalGeral]);


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
        } else if (totalGains === 0 && totalExpenses === 0) {
            return {
                title: "Op's!",
                icon: opsImg,
                description: "Neste mês, não há registros de entradas e saídas.",
                footerText: "Parece que você não fez nenhum registro no mês e ano selecionado."
            }
        } else if (totalBlance === 0) {
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
    }, [totalBlance, totalGains, totalExpenses]);

    const relationExpensesVersusGains = useMemo(() => {
        const total = totalGains + totalExpenses;
        const percentGains = Number(((totalGains / total) * 100).toFixed(1));
        const percentExpenses = Number(((totalExpenses / total) * 100).toFixed(1));

        const data = [
            {
                name: "Entradas",
                value: totalGains,
                percent: percentGains ? percentGains : 0,
                color: "#F7931B"
            },
            {
                name: "Saídas",
                value: totalExpenses,
                percent: percentExpenses ? percentExpenses : 0,
                color: "#E44C4E"
            },
        ];

        return data;
    }, [totalGains, totalExpenses]);

    const historyData = useMemo(() => {
        return listOfMonths
            .map((_, month) => {

                let amountEntry = 0;
                gains.forEach(gain => {
                    const date = new Date(gain.date);
                    const gainMonth = date.getMonth();
                    const gainYear = date.getFullYear();

                    if (gainMonth === month && gainYear === yearSelected) {
                        try {
                            amountEntry += Number(gain.amount);
                        } catch {
                            throw new Error('amountEntry is invalid. amountEntry must be valid number.')
                        }
                    }
                });

                let amountOutput = 0;
                expenses.forEach(expense => {
                    const date = new Date(expense.date);
                    const expenseMonth = date.getMonth();
                    const expenseYear = date.getFullYear();

                    if (expenseMonth === month && expenseYear === yearSelected) {
                        try {
                            amountOutput += Number(expense.amount);
                        } catch {
                            throw new Error('amountOutput is invalid. amountOutput must be valid number.')
                        }
                    }
                });


                return {
                    monthNumber: month,
                    month: listOfMonths[month].substr(0, 3),
                    amountEntry,
                    amountOutput
                }
            })
            .filter(item => {
                const currentMonth = new Date().getMonth();
                const currentYear = new Date().getFullYear();
                return (yearSelected === currentYear && item.monthNumber <= currentMonth) || (yearSelected < currentYear) || (yearSelected > currentYear)
            });
    }, [yearSelected]);

    const relationExpensesRecurrentVersusEventual = useMemo(() => {
        let amountRecurrent = 0;
        let amountEventual = 0;

        expenses.filter((expense) => {
            const date = new Date(expense.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            return month === monthSelected && year === yearSelected;
        }).forEach((expense) => {
            if (expense.frequency === 'recorrente') {
                return amountRecurrent += Number(expense.amount);
            }

            if (expense.frequency === 'eventual') {
                return amountEventual += Number(expense.amount);
            }
        });

        const total = amountRecurrent + amountEventual;
        const percentRecurrent = Number(((amountRecurrent / total) * 100).toFixed(1));
        const percentEventual = Number(((amountEventual / total) * 100).toFixed(1));

        const data = [
            {
                name: 'Recorrentes',
                amount: amountRecurrent,
                percent: percentRecurrent ? percentRecurrent : 0,
                color: "#F7931B"
            },
            {
                name: 'Eventuais',
                amount: amountEventual,
                percent: percentEventual ? percentEventual : 0,
                color: "#E44C4E"
            }
        ];

        return data;
    }, [monthSelected, yearSelected]);

    const relationGainsRecurrentVersusEventual = useMemo(() => {
        let amountRecurrent = 0;
        let amountEventual = 0;

        gains.filter((gain) => {
            const date = new Date(gain.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            return month === monthSelected && year === yearSelected;
        }).forEach((gain) => {
            if (gain.frequency === 'recorrente') {
                return amountRecurrent += Number(gain.amount);
            }

            if (gain.frequency === 'eventual') {
                return amountEventual += Number(gain.amount);
            }
        });

        const total = amountRecurrent + amountEventual;
        const percentRecurrent = Number(((amountRecurrent / total) * 100).toFixed(1));
        const percentEventual = Number(((amountEventual / total) * 100).toFixed(1));

        const data = [
            {
                name: 'Recorrentes',
                amount: amountRecurrent,
                percent: percentRecurrent ? percentRecurrent : 0,
                color: "#F7931B"
            },
            {
                name: 'Eventuais',
                amount: amountEventual,
                percent: percentEventual ? percentEventual : 0,
                color: "#E44C4E"
            }
        ];

        return data;
    }, [monthSelected, yearSelected]);

    const handleMonthSelected = useCallback((month: string) => {
        try {
            const parseMonth = Number(month);
            setMonthSelected(parseMonth);
        } catch {
            throw new Error('Invalid month value. Is accept 0 - 24.');
        }
    }, []);

    const handleYearSelected = useCallback((year: string) => {
        try {
            const parseYear = Number(year);
            setYearSelected(parseYear);
        } catch {
            throw new Error('Invalid year value. Is accept integer numbers.');
        }
    }, []);

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
            <ContentSaldoTotal>
                <WalletBoxTotal
                    title="Saldo Disponível"
                    amount={saldoDisponivelMaisLimite}
                    footerlabel={saldoLimite}
                    color="#41f05e"
                />
            </ContentSaldoTotal>
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
                    title={message.title}
                    icon={message.icon}
                    description={message.description}
                    footerText={message.footerText}
                />

                <PieChartBox data={relationExpensesVersusGains} />
                <HistoryBox
                    data={historyData}
                    lineColorAmountEntry="#F7931B"
                    lineColorAmountOutput="#E44C4E"
                />
                <BarChartBox
                    data={relationExpensesRecurrentVersusEventual}
                    title="Saídas"
                />
                <BarChartBox
                    data={relationGainsRecurrentVersusEventual}
                    title="Entradas"
                />
            </Content>
        </Container>
    );
}

export default Dashboard;