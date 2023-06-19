import { styled } from 'styled-components';
import { PaypalCheckout } from '../components';
import { useCartContext } from '../context/cart_context';
import { Link } from 'react-router-dom';

const CheckoutPage = () => {
  const { cart } = useCartContext();
  return (
    <Wrapper className="page-100">
      {cart.length < 1 ? (
        <div className="empty">
          <h2>your cart is empty</h2>
          <Link to="/shop" className="btn">
            back to shop
          </Link>
        </div>
      ) : (
        <PaypalCheckout />
      )}
    </Wrapper>
  );
};
const Wrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      font-weight: 300;
      text-transform: none;
    }
  }
`;
export default CheckoutPage;
