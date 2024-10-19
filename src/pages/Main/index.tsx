import { Sidebar } from '../../components/Sidebar';
import { Container } from './style';
import { Outlet } from 'react-router-dom';
import LogoImg from '../../assets/logo.svg';

export default function Main() {
    return (
        <Container>
            <Sidebar />
            <section>
                <span className="logo">
                    <LogoImg />
                </span>
                <Outlet />
            </section>
        </Container>
    );
}
