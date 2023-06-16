import { styled } from 'styled-components';
import { useCartContext } from '../context/cart_context';
import { Link } from 'react-router-dom';
import { CartContent } from '../components';

const CartPage = () => {
  const { cart } = useCartContext();

  console.log(cart);

  if (cart.length < 1) {
    return (
      <Wrapper className="page-100">
        <div className="empty">
          <h2>your cart is empty</h2>
          <Link to="/shop" className="btn">
            back to shop
          </Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <main>
      <Wrapper className="page">
        <CartContent />
      </Wrapper>
    </main>
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

export default CartPage;
