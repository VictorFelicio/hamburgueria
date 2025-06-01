import { Link } from 'react-router-dom';
import Logo from './../../assets/logo.svg';
import { Container } from './styles';
import { useCart } from '../../hooks/useCart';
import CartShopping from './../../assets/shopping-cart.svg';

export function OrderHeader() {
    const { totalCartItens } = useCart();
    return (
        <Container>
            <Link to={'/'}>
                <Logo />
            </Link>
            <div>
                <div>
                    <h3>Meus Pedidos</h3>
                    <span>
                        <strong>
                            {`${totalCartItens}`.padStart(2, '0')} <strong>item(s)</strong>
                        </strong>
                    </span>
                </div>
                <CartShopping />
            </div>
        </Container>
    );
}
