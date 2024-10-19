import { Container } from './style';
import BurgerIcon from './../../assets/burger.svg';
import MenuIcon from './../../assets/menu.svg';
export function Sidebar() {
    return (
        <Container>
            <button type="button">
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
                    <li></li>
                    <li></li>
                </ul>
            </nav>
        </Container>
    );
}
