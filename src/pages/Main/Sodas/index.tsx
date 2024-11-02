import { useEffect, useState } from 'react';
import { Head } from '../../../components/Head';
import { Snacks } from '../../../components/Snacks';
import { SnackTitle } from '../../../components/SnackTitle';
import { getDrinks } from '../../../services/api';

export function Sodas() {
    const [drinks, setDrinks] = useState([]);

    useEffect(() => {
        (async () => {
            const drinksResponse = await getDrinks();

            setDrinks(drinksResponse.data);
        })();
    }, []);
    return (
        <>
            <Head title="Bebidas" />
            <SnackTitle>bebidas</SnackTitle>
            <Snacks snacks={drinks} />
        </>
    );
}
