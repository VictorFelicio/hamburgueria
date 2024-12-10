import { Head } from '../../../components/Head';
import { OrderHeader } from '../../../components/OrderHeader';
import { Container } from './styles';

export function MyCart() {
    return (
        <Container>
            <Head title='Carrinho'/>
            <h1>Teste</h1>
            <OrderHeader/>
        </Container>
    );
}
