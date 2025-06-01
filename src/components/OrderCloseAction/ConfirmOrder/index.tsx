import { useCart } from '../../../hooks/useCart';
import { coinFormat } from '../../../utils/coinFormat';
import { Container } from '../styles';

export function ConfirmOrder() {
    const { cart, confirmOrder } = useCart();

    const cartTotalAmount = cart.reduce((acc, item) => (acc += item.subtotal), 0);

    return (
        <Container>
            <button
                type="button"
                onClick={confirmOrder}
            >
                Finalizar Pedido
            </button>
            <span>
                Total <strong>{coinFormat(cartTotalAmount)}</strong>
            </span>
        </Container>
    );
}
