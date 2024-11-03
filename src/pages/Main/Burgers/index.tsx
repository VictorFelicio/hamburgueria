import { useContext } from 'react';
import { Head } from '../../../components/Head';

import { Snacks } from '../../../components/Snacks';
import { SnackTitle } from '../../../components/SnackTitle';
import { SnackContext } from '../../../contexts/SnackContext';

export function Burgers() {
    const { burgers } = useContext(SnackContext);

    return (
        <>
            <Head title="Hamburgueres" />
            <SnackTitle>hambúrgueres</SnackTitle>
            <Snacks snacks={burgers} />
        </>
    );
}
