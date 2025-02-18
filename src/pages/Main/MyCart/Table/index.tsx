import { EmptyCart } from '../../../../components/EmptyCart';
import { useCart } from '../../../../hooks/useCart';
import { TableDesktop } from './TableDesktop';

export function Table() {
    const { cart } = useCart();

    if (cart.length <= 0) {
        return <EmptyCart title="Carrinho vazio" />;
    }
    return <TableDesktop />;
}
