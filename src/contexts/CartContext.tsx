import { createContext, ReactNode, useState } from 'react';
import { SnackData } from '../interfaces/SnackData';

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
        const newSnack = { ...snack, quantity: 1, subtotal: snack.price };
        const newCart = [...cart, newSnack];
        setCart(newCart);
    }

    return (
        <CartContext.Provider value={{ cart, addSnackToCart }}>
            {children}
        </CartContext.Provider>
    );
}
