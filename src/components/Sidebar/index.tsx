import { Container } from './style';
import BurgerIcon from './../../assets/burger.svg';
import PizzaIcon from './../../assets/pizza.svg';
import SodaIcon from './../../assets/soda.svg';
import IceCreamIcon from './../../assets/ice-cream.svg';
import MenuIcon from './../../assets/menu.svg';
import { useState } from 'react';
export function Sidebar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleToggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <Container isMenuOpen={menuOpen}>
            <button type="button" onClick={handleToggleMenu}>
                <MenuIcon />
            </button>
            <nav>
                <ul>
                    <li>
                        <a href="#" className="active">
                            <BurgerIcon />
                            <span>Hambúrgueres</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="">
                            <PizzaIcon />
                            <span>Pizzas</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="">
                            <SodaIcon />
                            <span>Bebidas</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="">
                            <IceCreamIcon />
                            <span>Sobremesas</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </Container>
    );
}
