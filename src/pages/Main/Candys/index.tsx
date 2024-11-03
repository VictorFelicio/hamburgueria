import { Head } from '../../../components/Head';
import { Snacks } from '../../../components/Snacks';
import { SnackTitle } from '../../../components/SnackTitle';
import { useSnack } from '../../../hooks/useSnack';

export function Candys() {
    const { candys } = useSnack();
    return (
        <>
            <Head title="Sobremesas" />
            <SnackTitle>sobremesas</SnackTitle>
            <Snacks snacks={candys} />
        </>
    );
}
