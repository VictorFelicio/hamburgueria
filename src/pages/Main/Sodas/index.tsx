import { useContext } from 'react';
import { Head } from '../../../components/Head';
import { Snacks } from '../../../components/Snacks';
import { SnackTitle } from '../../../components/SnackTitle';

import { SnackContext } from '../../../contexts/SnackContext';

export function Sodas() {
    const { drinks } = useContext(SnackContext);
    return (
        <>
            <Head title="Bebidas" />
            <SnackTitle>bebidas</SnackTitle>
            <Snacks snacks={drinks} />
        </>
    );
}
