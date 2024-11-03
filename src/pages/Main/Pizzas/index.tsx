import { useContext } from 'react';
import { Head } from '../../../components/Head';
import { Snacks } from '../../../components/Snacks';
import { SnackTitle } from '../../../components/SnackTitle';
import { SnackContext } from '../../../contexts/SnackContext';

export function Pizzas() {
    const { pizzas } = useContext(SnackContext);
    return (
        <>
            <Head title="Pizzas" />
            <SnackTitle>pizzas</SnackTitle>
            <Snacks snacks={pizzas} />
        </>
    );
}
