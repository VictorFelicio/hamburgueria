import { Link } from "react-router-dom";
import Logo from "./../../assets/logo.svg";
import { Container } from "./styles";
import { useCart } from "../../hooks/useCart";
import CartShopping from "./../../assets/shopping-cart.svg";

export function OrderHeader() {
  const { cart } = useCart();
  return (
    <Container>
      <Link to={"/"}>
        <Logo />
      </Link>
      <div>
        <div>
          <h3>Meus Pedidos</h3>
          <span>
            <strong>
              {`${cart.length}`.padStart(2, "0")} <strong>lanche(s)</strong>
            </strong>
          </span>
        </div>
        <CartShopping />
      </div>
    </Container>
  );
}
