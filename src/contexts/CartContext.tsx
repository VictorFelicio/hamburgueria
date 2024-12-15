import { createContext, ReactNode, useState } from 'react';
import { SnackBase } from '../interfaces/SnackBase';
import { toast } from 'react-toastify';
import { snackEmoji } from '../helpers/snackEmoji';

interface CartSnack extends SnackBase {
    quantity: number;
    subtotal: number;
}

interface CartProviderProps {
    children: ReactNode;
}
interface CartContextProps {
    cart: CartSnack[];
    addSnackToCart: (snack: SnackBase) => void;
    removeSnackFromCart: (snack: CartSnack) => void;
    snackCartIncrement: (snack: CartSnack) => void;
    snackCartDecrement: (snack: CartSnack) => void;
}

export const CartContext = createContext({} as CartContextProps);

export function CartProvider({ children }: CartProviderProps) {
    const [cart, setCart] = useState<CartSnack[]>([]);

    function addSnackToCart(snack: SnackBase): void {
        const hasSnackInCart = cart.find(
            (item) => item.type === snack.type && item.id === snack.id
        );

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

            setCart(newCart);
            toast.success(
                `${snackEmoji(snack)} Outro(a) ${snack.name} adicionado aos pedidos!`
            );
        } else {
            const newSnack = { ...snack, quantity: 1, subtotal: snack.price };
            const newCart = [...cart, newSnack];
            setCart(newCart);
            toast.success(` ${snackEmoji(snack)} ${snack.name} adicionado ao pedido!`);
        }
    }

    function removeSnackFromCart(snack: CartSnack) {
        const newCart = cart.filter(
            (snackInCart) =>
                !(snackInCart.type === snack.type && snackInCart.id === snack.id)
        );
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

        const snackExistentInCart = cart.find(
            (item) => item.type === snack.type && item.id === snack.id
        );

        if (!snackExistentInCart) return;

        const newCart = cart.map((item) => {
            if (
                item.type === snackExistentInCart.type &&
                item.id === snackExistentInCart.id
            ) {
                return {
                    ...item,
                    quantity: newQuantity,
                    subtotal: item.price * newQuantity,
                };
            }

            return item;
        });

        setCart(newCart);
    }

    return (
        <CartContext.Provider
            value={{
                cart,
                addSnackToCart,
                removeSnackFromCart,
                snackCartIncrement,
                snackCartDecrement,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}
