import { useEffect, useState } from 'react';
import { Head } from '../../../components/Head';
import { Snacks } from '../../../components/Snacks';
import { SnackTitle } from '../../../components/SnackTitle';
import { getPizzas } from '../../../services/api';
import { SnackData } from '../../../interfaces/SnackData';

export function Pizzas() {
    const [pizzas, setPizzas] = useState<SnackData[]>([]);

    useEffect(() => {
        (async () => {
            const pizzasResponse = await getPizzas();

            setPizzas(pizzasResponse.data);
        })();
    }, []);
    return (
        <>
            <Head title="Pizzas" />
            <SnackTitle>pizzas</SnackTitle>
            <Snacks snacks={pizzas} />
        </>
    );
}
