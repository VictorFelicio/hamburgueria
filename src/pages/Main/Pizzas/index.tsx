import { Head } from '../../../components/Head';
import { Snacks } from '../../../components/Snacks';
import { SnackTitle } from '../../../components/SnackTitle';
import { menu } from '../../../data/menu';

export function Pizzas() {
    return (
        <>
            <Head title="Pizzas" />
            <SnackTitle>pizzas</SnackTitle>
            <Snacks snacks={menu.pizzas} />
        </>
    );
}
