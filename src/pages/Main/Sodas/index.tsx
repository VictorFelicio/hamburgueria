import { Head } from '../../../components/Head';
import { Snacks } from '../../../components/Snacks';
import { SnackTitle } from '../../../components/SnackTitle';
import { menu } from '../../../data/menu';

export function Sodas() {
    return (
        <>
            <Head title="Bebidas" />
            <SnackTitle>bebidas</SnackTitle>
            <Snacks snacks={menu.drinks} />
        </>
    );
}
