import { FiPlus } from 'react-icons/fi';
import { Container } from './style';
import { coinFormat } from '../../utils/coinFormat';

export interface SnacksProps {
    snacks: Itens[];
}

interface Itens {
    id: number;
    snack: string;
    name: string;
    description: string;
    price: number;
    image: string;
}

export function Snacks(props: SnacksProps) {
    return (
        <Container>
            {props.snacks.map((snack) => {
                return (
                    <div key={snack.id} className="snack">
                        <h2>{snack.name}</h2>
                        <img src={snack.image} alt={snack.description} />
                        <p>{snack.description}</p>
                        <div>
                            <strong>{coinFormat(snack.price)}</strong>
                            <button type="button">
                                <FiPlus />
                            </button>
                        </div>
                    </div>
                );
            })}
        </Container>
    );
}
