import { Head } from '../../../components/Head';
import { Snacks } from '../../../components/Snacks';
import { SnackTitle } from '../../../components/SnackTitle';
import { useSnack } from '../../../hooks/useSnack';

export function Pizzas() {
    const { pizzas } = useSnack();
    return (
        <>
            <Head title="Pizzas" />
            <SnackTitle>pizzas</SnackTitle>
            <Snacks snacks={pizzas} />
        </>
    );
}
