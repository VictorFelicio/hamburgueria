import { Container } from './style';
import BurgerIcon from './../../assets/burger.svg';
import PizzaIcon from './../../assets/pizza.svg';
import SodaIcon from './../../assets/soda.svg';
import IceCreamIcon from './../../assets/ice-cream.svg';
import MenuIcon from './../../assets/menu.svg';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export function Sidebar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleToggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <Container ismenuopen={menuOpen}>
            <button
                type="button"
                onClick={handleToggleMenu}
            >
                <MenuIcon />
            </button>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">
                            <BurgerIcon />
                            <span>Hambúrgueres</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/pizzas">
                            <PizzaIcon />
                            <span>Pizzas</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/drinks">
                            <SodaIcon />
                            <span>Bebidas</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/candys">
                            <IceCreamIcon />
                            <span>Sobremesas</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </Container>
    );
}
