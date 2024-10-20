import { Head } from '../../../components/Head';
import { SnackTitle } from '../../../components/SnackTitle';

export function Burgers() {
    const data = [
        {
            id: 1,
            snack: 'burger',
            name: 'Mega',
            description:
                'O artesanal tamanho familia recheado com tres carnes, queijo e bacon.',
            price: 25.5,
            image: 'https://i.imgur.com/upjIUnG.jpg',
        },
        {
            id: 2,
            snack: 'burger',
            name: 'Extra Bacon',
            description:
                'O artesanal familia recheado com carne, queijo e extra bacon.',
            price: 23.5,
            image: 'https://i.imgur.com/B4J04AJ.jpg',
        },
    ];
    return (
        <>
            <Head title="Hamburgueres" />
            <SnackTitle>hambúrgueres</SnackTitle>
        </>
    );
}
