import { Head } from '../../../components/Head';
import { menu } from '../../../data/menu';
import { Snacks } from '../../../components/Snacks';
import { SnackTitle } from '../../../components/SnackTitle';

export function Burgers() {
    return (
        <>
            <Head title="Hamburgueres" />
            <SnackTitle>hambúrgueres</SnackTitle>
            <Snacks snacks={menu.burges} />
        </>
    );
}
