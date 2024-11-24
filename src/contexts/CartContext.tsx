import { createContext, ReactNode } from 'react';
import { SnackData } from '../interfaces/SnackData';

interface Snack extends SnackData {
    quantity: number;
    subtotal: number;
}

interface RemoveSnacktoCartProps {
    id: number;
    snack: string;
}

interface UpdateCartProps {
    id: number;
    snack: string;
    newQuantity: number;
}

interface CartContextProps {
    cart: Snack[];
    addSnackToCart: (snack: SnackData) => void;
    removeSnackToCart: ({ id, snack }: RemoveSnacktoCartProps) => void;
    updateCart: ({ id, snack, newQuantity }: UpdateCartProps) => void;
}

interface CartProviderProps {
    children: ReactNode;
}

export const CartContext = createContext({} as CartContextProps);

export function CartProvider({ children }: CartProviderProps) {
    //
}
