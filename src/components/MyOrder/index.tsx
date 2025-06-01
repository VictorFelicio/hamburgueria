import { useCart } from '../../hooks/useCart';
import { Container } from './styles';
import CartShopping from './../../assets/shopping-cart.svg';

export function MyOrder() {
    const { totalCartItens } = useCart();
    return (
        <Container to={'cart'}>
            <span>Meu Pedido</span>
            <CartShopping />
            {totalCartItens > 0 && <span>{`${totalCartItens}`.padStart(2, '0')}</span>}
        </Container>
    );
}
