import React from 'react';
import ContentHeader from '../../components/ContentHeader';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';
import SelectInput from '../../components/SelectInput';
import { Container, Content } from './styles';

const List: React.FC = () => {
    const options = [
        {value: 'Alexsandro', label: 'Alexsandro Silva'},
        {value: 'Alexsandro', label: 'Alexsandro Silva'},
        {value: 'Alexsandro', label: 'Alexsandro Silva'},
    ];
    return (
        <Container>
            <ContentHeader title="Saídas" lineColor="#E44C4E">
                <SelectInput options={options} />
            </ContentHeader>
            <Content>
                <HistoryFinanceCard
                    cardColor = "#313862"
                    tagColor = "#E44C4E"
                    title = "Conta de Luz"
                    subtitle = "21/12/2020"
                    amount = "R$ 200,00"
                />
                <HistoryFinanceCard
                    cardColor = "#313862"
                    tagColor = "#E44C4E"
                    title = "Conta de Luz"
                    subtitle = "21/12/2020"
                    amount = "R$ 200,00"
                />
                <HistoryFinanceCard
                    cardColor = "#313862"
                    tagColor = "#E44C4E"
                    title = "Conta de Luz"
                    subtitle = "21/12/2020"
                    amount = "R$ 200,00"
                />
                <HistoryFinanceCard
                    cardColor = "#313862"
                    tagColor = "#E44C4E"
                    title = "Conta de Luz"
                    subtitle = "21/12/2020"
                    amount = "R$ 200,00"
                />
                <HistoryFinanceCard
                    cardColor = "#313862"
                    tagColor = "#E44C4E"
                    title = "Conta de Luz"
                    subtitle = "21/12/2020"
                    amount = "R$ 200,00"
                />
                <HistoryFinanceCard
                    cardColor = "#313862"
                    tagColor = "#E44C4E"
                    title = "Conta de Luz"
                    subtitle = "21/12/2020"
                    amount = "R$ 200,00"
                />
                <HistoryFinanceCard
                    cardColor = "#313862"
                    tagColor = "#E44C4E"
                    title = "Conta de Luz"
                    subtitle = "21/12/2020"
                    amount = "R$ 200,00"
                />
                <HistoryFinanceCard
                    cardColor = "#313862"
                    tagColor = "#E44C4E"
                    title = "Conta de Luz"
                    subtitle = "21/12/2020"
                    amount = "R$ 200,00"
                />
                <HistoryFinanceCard
                    cardColor = "#313862"
                    tagColor = "#E44C4E"
                    title = "Conta de Luz"
                    subtitle = "21/12/2020"
                    amount = "R$ 200,00"
                />
                <HistoryFinanceCard
                    cardColor = "#313862"
                    tagColor = "#E44C4E"
                    title = "Conta de Luz"
                    subtitle = "21/12/2020"
                    amount = "R$ 200,00"
                />
                <HistoryFinanceCard
                    cardColor = "#313862"
                    tagColor = "#E44C4E"
                    title = "Conta de Luz"
                    subtitle = "21/12/2020"
                    amount = "R$ 200,00"
                />
                <HistoryFinanceCard
                    cardColor = "#313862"
                    tagColor = "#E44C4E"
                    title = "Conta de Luz"
                    subtitle = "21/12/2020"
                    amount = "R$ 200,00"
                />
                <HistoryFinanceCard
                    cardColor = "#313862"
                    tagColor = "#E44C4E"
                    title = "Conta de Luz"
                    subtitle = "21/12/2020"
                    amount = "R$ 200,00"
                />
                <HistoryFinanceCard
                    cardColor = "#313862"
                    tagColor = "#E44C4E"
                    title = "Conta de Luz"
                    subtitle = "21/12/2020"
                    amount = "R$ 200,00"
                />
                <HistoryFinanceCard
                    cardColor = "#313862"
                    tagColor = "#E44C4E"
                    title = "Conta de Luz"
                    subtitle = "21/12/2020"
                    amount = "R$ 200,00"
                />
                <HistoryFinanceCard
                    cardColor = "#313862"
                    tagColor = "#E44C4E"
                    title = "Conta de Luz"
                    subtitle = "21/12/2020"
                    amount = "R$ 200,00"
                />
                <HistoryFinanceCard
                    cardColor = "#313862"
                    tagColor = "#E44C4E"
                    title = "Conta de Luz"
                    subtitle = "21/12/2020"
                    amount = "R$ 200,00"
                />
                <HistoryFinanceCard
                    cardColor = "#313862"
                    tagColor = "#E44C4E"
                    title = "Conta de Luz"
                    subtitle = "21/12/2020"
                    amount = "R$ 200,00"
                />
                <HistoryFinanceCard
                    cardColor = "#313862"
                    tagColor = "#E44C4E"
                    title = "Conta de Luz"
                    subtitle = "21/12/2020"
                    amount = "R$ 200,00"
                />
                <HistoryFinanceCard
                    cardColor = "#313862"
                    tagColor = "#E44C4E"
                    title = "Conta de Luz"
                    subtitle = "21/12/2020"
                    amount = "R$ 200,00"
                />
                <HistoryFinanceCard
                    cardColor = "#313862"
                    tagColor = "#E44C4E"
                    title = "Conta de Luz"
                    subtitle = "21/12/2020"
                    amount = "R$ 200,00"
                />
            </Content>
        </Container>
    );
}

export default List;