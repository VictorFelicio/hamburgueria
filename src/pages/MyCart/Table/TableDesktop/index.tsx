import { useCart } from '../../../../hooks/useCart';
import { coinFormat } from '../../../../utils/coinFormat';
import { Container } from './styles';
import PlusImg from './../../../../../assets/circle-plus.svg';
import MinusImg from './../../../../../assets/circle-minus.svg';
import { FaTrashAlt } from 'react-icons/fa';
import { ConfirmOrder } from '../../../../components/ConfirmOrder';

export function TableDesktop() {
    const { cart, removeSnackFromCart, snackCartDecrement, snackCartIncrement } = useCart();
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Lanche</th>
                        <th>Qtd</th>
                        <th>Subtotal</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item) => (
                        <tr key={`${item.type} ${item.id}`}>
                            <td>
                                <img
                                    src={item.image}
                                    alt={item.name}
                                />
                            </td>
                            <td>
                                <h4>{item.name}</h4>
                                <span>{coinFormat(item.price)}</span>
                            </td>
                            <td>
                                <div>
                                    <button
                                        type="button"
                                        onClick={() => snackCartDecrement(item)}
                                    >
                                        <MinusImg />
                                    </button>
                                    <span>{`${item.quantity}`.padStart(2, '0')}</span>
                                    <button
                                        type="button"
                                        onClick={() => snackCartIncrement(item)}
                                    >
                                        <PlusImg />
                                    </button>
                                </div>
                            </td>
                            <td>
                                <h5>{coinFormat(item.subtotal)}</h5>
                            </td>
                            <td>
                                <button
                                    type="button"
                                    onClick={() => removeSnackFromCart(item)}
                                >
                                    <FaTrashAlt />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ConfirmOrder />
        </Container>
    );
}
