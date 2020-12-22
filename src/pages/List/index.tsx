import React, { useEffect, useMemo, useState } from 'react';
import ContentHeader from '../../components/ContentHeader';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';
import SelectInput from '../../components/SelectInput';
import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';
import { Container, Content, Filters } from './styles';

interface IRouteParams {
    match: {
        params: {
            type: string;
        }
    }
}

interface IData {
    id: string;
    description: string;
    amountFormatted: string;
    frequency: string;
    dataFormatted: string;
    tagColor: string;
}

const List: React.FC<IRouteParams> = ({ match }) => {
    const [data, setData] = useState<IData[]>([]);
    const { type } = match.params;

    const title = useMemo(() => {
        return type === 'entry-balance' ? {
            title: 'Entradas',
            LineColor: '#F7931B'
        } : {
                title: 'Saídas',
                LineColor: '#E44C4E'
            }
    }, [type]);

    const listData = useMemo(() => {
        return type === 'entry-balance' ? gains : expenses;
    }, [type]);

    const months = [
        { value: 1, label: 'Janeiro' },
        { value: 2, label: 'Fevereiro' },
        { value: 3, label: 'Março' },
        { value: 4, label: 'Abril' },
        { value: 5, label: 'Maio' },
        { value: 6, label: 'Junho' },
        { value: 7, label: 'Julho' },
        { value: 8, label: 'Agosto' },
        { value: 9, label: 'Setembro' },
        { value: 10, label: 'Outubro' },
        { value: 11, label: 'Novembro' },
        { value: 12, label: 'Dezembro' },
    ];

    const years = [
        { value: 2021, label: 2021 },
        { value: 2022, label: 2022 },
        { value: 2023, label: 2023 },
        { value: 2024, label: 2024 },
        { value: 2025, label: 2025 },
        { value: 2026, label: 2026 },
        { value: 2027, label: 2027 },
        { value: 2028, label: 2028 },
        { value: 2029, label: 2029 },
        { value: 2030, label: 2030 },
        { value: 2031, label: 2031 },
    ];

    useEffect(() => {
        const response = listData.map(item => {
            return {
                id: String(Math.random() * data.length),
                description: item.description,
                amountFormatted: item.amount,
                frequency: item.frequency,
                dataFormatted: item.date,
                tagColor: item.frequency === 'recorrente' ? '#4E41F0' : '#E44C4E'
            }
        });
        setData(response);
    }, [listData]);

    return (
        <Container>
            <ContentHeader title={title.title} lineColor={title.LineColor}>
                <SelectInput options={months} />
                <SelectInput options={years} />
            </ContentHeader>

            <Filters>
                <button
                    type="button"
                    className="tag-filter tag-filter-recurrent"
                >
                    Recorrentes
                </button>

                <button
                    type="button"
                    className="tag-filter tag-filter-eventual"
                >
                    Eventuais
                </button>
            </Filters>

            <Content>
                {
                    data.map(item => (
                        <HistoryFinanceCard
                            key = {item.id}
                            tagColor = {item.tagColor}
                            title = {item.description}
                            subtitle = {item.dataFormatted}
                            amount = {item.amountFormatted}
                        />
                    ))
                }
            </Content>
        </Container>
    );
}

export default List;