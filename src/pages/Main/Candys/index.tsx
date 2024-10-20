import { Head } from '../../../components/Head';
import { Snacks } from '../../../components/Snacks';
import { SnackTitle } from '../../../components/SnackTitle';
import { menu } from '../../../data/menu';

export function Candys() {
    return (
        <>
            <Head title="Sobremesas" />
            <SnackTitle>sobremesas</SnackTitle>
            <Snacks snacks={menu.candys} />
        </>
    );
}
