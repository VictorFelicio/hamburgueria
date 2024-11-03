import { createContext, ReactNode, useEffect, useState } from 'react';

import { SnackData } from '../interfaces/SnackData';

import { getBurgers, getDrinks, getCandys, getPizzas } from '../services/api';

interface SnackContextProps {
    burgers: SnackData[];
    pizzas: SnackData[];
    drinks: SnackData[];
    candys: SnackData[];
}

interface SnackProviderProps {
    children: ReactNode;
}

export const SnackContext = createContext({} as SnackContextProps);

export function SnackProvider({ children }: SnackProviderProps) {
    const [burgers, setBurgers] = useState<SnackData[]>([]);
    const [pizzas, setPizzas] = useState<SnackData[]>([]);
    const [drinks, setDrinks] = useState<SnackData[]>([]);
    const [candys, setCandys] = useState<SnackData[]>([]);

    useEffect(() => {
        (async () => {
            try {
                const burgerRequest = await getBurgers();
                const pizzaRequest = await getPizzas();
                const drinkRequest = await getDrinks();
                const candyRequest = await getCandys();

                const requests = [
                    burgerRequest,
                    pizzaRequest,
                    drinkRequest,
                    candyRequest,
                ];

                const [
                    { data: burgerResponse },
                    { data: pizzaResponse },
                    { data: drinkResponse },
                    { data: candyResponse },
                ] = await Promise.all(requests);

                setBurgers(burgerResponse);
                setPizzas(pizzaResponse);
                setDrinks(drinkResponse);
                setCandys(candyResponse);
            } catch (error) {
                console.error(error);
            }
        })();
    }, []);

    return (
        <SnackContext.Provider value={{ burgers, pizzas, drinks, candys }}>
            {children}
        </SnackContext.Provider>
    );
}
