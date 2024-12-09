import { createContext, ReactNode, useState } from 'react';
import { SnackData } from '../interfaces/SnackData';
import { toast } from 'react-toastify';
import { snackEmoji } from '../helpers/snackEmoji';

interface Snack extends SnackData {
    quantity: number;
    subtotal: number;
}

// interface RemoveSnacktoCartProps {
//     id: number;
//     snack: string;
// }

// interface UpdateCartProps {
//     id: number;
//     snack: string;
//     newQuantity: number;
// }

interface CartContextProps {
    cart: Snack[];
    addSnackToCart: (snack: SnackData) => void;
    //removeSnackToCart: ({ id, snack }: RemoveSnacktoCartProps) => void;
    //updateCart: ({ id, snack, newQuantity }: UpdateCartProps) => void;
}

interface CartProviderProps {
    children: ReactNode;
}

export const CartContext = createContext({} as CartContextProps);

export function CartProvider({ children }: CartProviderProps) {
    const [cart, setCart] = useState<Snack[]>([]);

    function addSnackToCart(snack: SnackData): void {
        const hasSnackInCart = cart.find(
            (item) => item.snack === snack.snack && item.id === snack.id
        );

        if (hasSnackInCart) {
            const newCart = cart.map((item) => {
                if (item.snack === snack.snack && item.id === snack.id) {
                    const newQuantity = item.quantity + 1;
                    const newSubtotal = item.price * newQuantity;

                    return {
                        ...item,
                        quantity: newQuantity,
                        subtotal: newSubtotal,
                    };
                }
                return item;
            });
            toast.success(
                `${snackEmoji(snack)} Outro(a) ${
                    snack.name
                } adicionado aos pedidos!`
            );
            setCart(newCart);

            return;
        }

        const newSnack = { ...snack, quantity: 1, subtotal: snack.price };
        const newCart = [...cart, newSnack];
        toast.success(
            ` ${snackEmoji(snack)} ${snack.name} adicionado aos pedidos!`
        );
        setCart(newCart);
    }

    return (
        <CartContext.Provider value={{ cart, addSnackToCart }}>
            {children}
        </CartContext.Provider>
    );
}
