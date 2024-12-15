import { createContext, ReactNode, useEffect, useState } from 'react';

import { SnackBase } from '../interfaces/SnackBase';

import { getBurgers, getDrinks, getCandys, getPizzas } from '../services/api';
import { menu } from '../data/menu';

interface SnackContextProps {
    burgers: SnackBase[];
    pizzas: SnackBase[];
    drinks: SnackBase[];
    candys: SnackBase[];
}

interface SnackProviderProps {
    children: ReactNode;
}

export const SnackContext = createContext({} as SnackContextProps);

export function SnackProvider({ children }: SnackProviderProps) {
    const [burgers, setBurgers] = useState<SnackBase[]>([]);
    const [pizzas, setPizzas] = useState<SnackBase[]>([]);
    const [drinks, setDrinks] = useState<SnackBase[]>([]);
    const [candys, setCandys] = useState<SnackBase[]>([]);

    useEffect(() => {
        const mockData = import.meta.env.VITE_MOCK_DATA;
        (async () => {
            if (mockData) {
                setBurgers(menu.burgers);
                setPizzas(menu.pizzas);
                setDrinks(menu.drinks);
                setCandys(menu.candys);
            } else {
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
            }
        })();
    }, []);

    return (
        <SnackContext.Provider value={{ burgers, pizzas, drinks, candys }}>
            {children}
        </SnackContext.Provider>
    );
}
