import { styled } from 'styled-components';
import { useCartContext } from '../context/cart_context';
import CartColumns from './CartColumns';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import CartTotals from './CartTotals';

const CartContent = () => {
  const { cart } = useCartContext();
  return (
    <Wrapper className="section-center">
      <CartColumns />
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <hr />
      <div className="link-container">
        <Link to="/shop" className="link-btn continue-btn">
          continue shopping
        </Link>
        <button type="button" className="link-btn clear-btn">
          clear shopping cart
        </button>
      </div>
      <CartTotals />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 6rem;
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 1rem;
    background: var(--clr-black);
    color: var(--clr-white);
    cursor: pointer;
  }
`;
export default CartContent;
