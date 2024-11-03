import { useContext } from 'react';
import { Head } from '../../../components/Head';
import { Snacks } from '../../../components/Snacks';
import { SnackTitle } from '../../../components/SnackTitle';
import { SnackContext } from '../../../contexts/SnackContext';

export function Candys() {
    const { candys } = useContext(SnackContext);
    return (
        <>
            <Head title="Sobremesas" />
            <SnackTitle>sobremesas</SnackTitle>
            <Snacks snacks={candys} />
        </>
    );
}
