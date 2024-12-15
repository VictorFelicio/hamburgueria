import { FiPlus } from 'react-icons/fi';
import { Container } from './style';
import { coinFormat } from '../../utils/coinFormat';
import { SkeletonSnack } from './SkeletonSnack';
import { SnackBase } from '../../interfaces/SnackBase';
import { useCart } from '../../hooks/useCart';

export interface SnacksProps {
    snacks: SnackBase[];
}

export function Snacks(props: SnacksProps) {
    const { cart, addSnackToCart } = useCart();

    return (
        <Container>
            {!props.snacks.length
                ? [1, 2, 3, 4, 5, 6].map((n) => {
                      return <SkeletonSnack key={n} />;
                  })
                : props.snacks.map((snack) => {
                      const snackExistent = cart.find(
                          (item) => item.type === snack.type && item.id === snack.id
                      );

                      console.log(cart);

                      return (
                          <div
                              key={snack.id}
                              className="snack"
                          >
                              {snackExistent && (
                                  <span>{snackExistent.quantity}</span>
                              )}
                              <h2>{snack.name}</h2>
                              <img
                                  src={snack.image}
                                  alt={snack.description}
                              />
                              <p>{snack.description}</p>
                              <div>
                                  <strong>{coinFormat(snack.price)}</strong>
                                  <button
                                      type="button"
                                      onClick={() => addSnackToCart(snack)}
                                  >
                                      <FiPlus />
                                  </button>
                              </div>
                          </div>
                      );
                  })}
        </Container>
    );
}
