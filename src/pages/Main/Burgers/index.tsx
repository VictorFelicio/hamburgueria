import { Head } from '../../../components/Head';

import { Snacks } from '../../../components/Snacks';
import { SnackTitle } from '../../../components/SnackTitle';
import { SnackData } from '../../../interfaces/SnackData';
import { getBurgers } from '../../../services/api';
import { useEffect, useState } from 'react';

export function Burgers() {
    const [burgers, setBurgers] = useState<SnackData[]>([]);

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
