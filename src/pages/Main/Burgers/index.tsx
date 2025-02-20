import { Head } from '../../../components/Head';
import { Snacks } from '../../../components/Snacks';
import { SnackTitle } from '../../../components/SnackTitle';
import { useSnack } from '../../../hooks/useSnack';

export function Burgers() {
    const { burgers } = useSnack();

    return (
        <>
            <Head title="Hambúrgueres" />
            <SnackTitle>hambúrgueres</SnackTitle>
            <Snacks snacks={burgers} />
        </>
    );
}
