import { Sidebar } from '../../components/Sidebar';
import { Container } from './style';
import { Outlet } from 'react-router-dom';
import LogoImg from '../../assets/logo.svg';
import { MyOrder } from '../../components/MyOrder';

export default function Main() {
    return (
        <Container>
            <Sidebar />
            <section>
                <LogoImg />
                <Outlet />
            </section>
            <MyOrder />
        </Container>
    );
}
