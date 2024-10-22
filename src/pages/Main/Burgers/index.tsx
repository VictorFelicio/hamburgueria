import { Head } from '../../../components/Head';

import { Snacks } from '../../../components/Snacks';
import { SnackTitle } from '../../../components/SnackTitle';
import { getBurgers } from '../../../services/api';
import { useEffect, useState } from 'react';

export function Burgers() {
    const [burgers, setBurgers] = useState([]);

    useEffect(() => {
        (async () => {
            const burgerResponse = await getBurgers();

            setBurgers(burgerResponse.data);
        })();
    }, []);

    return (
        <>
            <Head title="Hamburgueres" />
            <SnackTitle>hambúrgueres</SnackTitle>
            <Snacks snacks={burgers} />
        </>
    );
}
