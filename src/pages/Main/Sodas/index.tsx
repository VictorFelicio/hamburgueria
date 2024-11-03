import { Head } from '../../../components/Head';
import { Snacks } from '../../../components/Snacks';
import { SnackTitle } from '../../../components/SnackTitle';

import { useSnack } from '../../../hooks/useSnack';

export function Sodas() {
    const { drinks } = useSnack();
    return (
        <>
            <Head title="Bebidas" />
            <SnackTitle>bebidas</SnackTitle>
            <Snacks snacks={drinks} />
        </>
    );
}
