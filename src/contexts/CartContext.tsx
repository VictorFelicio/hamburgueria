import { createContext, ReactNode, useState } from 'react';
import { SnackBase } from '../interfaces/SnackBase';
import { toast } from 'react-toastify';
import { snackEmoji } from '../helpers/snackEmoji';
import { useNavigate } from 'react-router-dom';
import { IFormPayment } from '../pages/Payment/interface/IFormPayment';

interface CartSnack extends SnackBase {
    quantity: number;
    subtotal: number;
}

interface CartProviderProps {
    children: ReactNode;
}
interface CartContextProps {
    cart: CartSnack[];
    totalCartItens: number;
    addSnackToCart: (snack: SnackBase) => void;
    removeSnackFromCart: (snack: CartSnack) => void;
    snackCartIncrement: (snack: CartSnack) => void;
    snackCartDecrement: (snack: CartSnack) => void;
    confirmOrder: () => void;
    payOrder: (data: IFormPayment) => void;
}

export const CartContext = createContext({} as CartContextProps);

export function CartProvider({ children }: CartProviderProps) {
    const [cart, setCart] = useState<CartSnack[]>(() => {
        const storedCart = localStorage.getItem('@hambugeria:cart');
        if (storedCart) return JSON.parse(storedCart);
        return [];
    });
    const navigate = useNavigate();
    const localStorageKey = '@hambugeria:cart';

    const totalCartItens = cart.reduce((acc, item) => acc + item.quantity, 0);

    function saveCartOnLocalStorage(items: CartSnack[]) {
        setCart(items);
        localStorage.setItem(localStorageKey, JSON.stringify(items));
    }

    function clearCart() {
        setCart([]);
        localStorage.removeItem(localStorageKey);
    }

    function addSnackToCart(snack: SnackBase): void {
        const hasSnackInCart = cart.find((item) => item.type === snack.type && item.id === snack.id);

        if (hasSnackInCart) {
            const newCart = cart.map((item) =>
                item.type === snack.type && item.id === snack.id
                    ? {
                          ...item,
                          quantity: item.quantity + 1,
                          subtotal: item.price * (item.quantity + 1),
                      }
                    : item
            );

            saveCartOnLocalStorage(newCart);
            toast.success(`${snackEmoji(snack)} Outro(a) ${snack.name} adicionado aos pedidos!`);
        } else {
            const newSnack = { ...snack, quantity: 1, subtotal: snack.price };
            const newCart = [...cart, newSnack];
            saveCartOnLocalStorage(newCart);
            toast.success(` ${snackEmoji(snack)} ${snack.name} adicionado ao pedido!`);
        }
    }

    function removeSnackFromCart(snack: CartSnack) {
        const newCart = cart.filter((snackInCart) => !(snackInCart.type === snack.type && snackInCart.id === snack.id));
        setCart(newCart);
    }

    function snackCartIncrement(snack: CartSnack) {
        updateSnackQuantity(snack, snack.quantity + 1);
    }
    function snackCartDecrement(snack: CartSnack) {
        updateSnackQuantity(snack, snack.quantity - 1);
    }

    function updateSnackQuantity(snack: CartSnack, newQuantity: number) {
        if (newQuantity <= 0) return;

        const snackExistentInCart = cart.find((item) => item.type === snack.type && item.id === snack.id);

        if (!snackExistentInCart) return;

        const newCart = cart.map((item) => {
            if (item.type === snackExistentInCart.type && item.id === snackExistentInCart.id) {
                return {
                    ...item,
                    quantity: newQuantity,
                    subtotal: item.price * newQuantity,
                };
            }

            return item;
        });

        saveCartOnLocalStorage(newCart);
    }

    function confirmOrder() {
        navigate('/payment');
    }

    function payOrder(data: IFormPayment) {
        console.log(data);
        clearCart();
    }

    return (
        <CartContext.Provider
            value={{
                cart,
                totalCartItens,
                addSnackToCart,
                removeSnackFromCart,
                snackCartIncrement,
                snackCartDecrement,
                confirmOrder,
                payOrder,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}
