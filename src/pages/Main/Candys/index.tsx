import { useEffect, useState } from 'react';
import { Head } from '../../../components/Head';
import { Snacks } from '../../../components/Snacks';
import { SnackTitle } from '../../../components/SnackTitle';
import { getCandys } from '../../../services/api';
import { SnackData } from '../../../interfaces/SnackData';

export function Candys() {
    const [candys, setCandys] = useState<SnackData[]>([]);

    useEffect(() => {
        (async () => {
            const candysResponse = await getCandys();

            setCandys(candysResponse.data);
        })();
    }, []);
    return (
        <>
            <Head title="Sobremesas" />
            <SnackTitle>sobremesas</SnackTitle>
            <Snacks snacks={candys} />
        </>
    );
}
