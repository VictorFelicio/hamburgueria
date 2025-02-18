import { Button, Container } from './styles';
import ManAndBurger from './../../assets/man-and-burger.svg';
interface EmptyCartProps {
    title: string;
}

export function EmptyCart({ title }: EmptyCartProps) {
    return (
        <Container>
            <h2>{title}</h2>
            <Button to="/">CHecar o cardápio</Button>
            <ManAndBurger />
        </Container>
    );
}
