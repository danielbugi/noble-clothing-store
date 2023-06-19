import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUserPlus, FaUserMinus } from 'react-icons/fa';
import { styled } from 'styled-components';
import { useCartContext } from '../context/cart_context';
import { useUserContext } from '../context/user_context';

const CartButtons = () => {
  const { total_items, clearCart } = useCartContext();
  const { loginWithPopup, logout, myUser } = useUserContext();
  return (
    <Wrapper className="cart-btn-wrapper">
      <Link to="/cart" className="cart-btn">
        <span className="cart-container">
          Cart
          <FaShoppingCart />
          <span className="cart-value">{total_items}</span>
        </span>
      </Link>
      {!myUser ? (
        <button
          className="auth-btn"
          type="btn"
          onClick={() => loginWithPopup()}
        >
          Login <FaUserPlus />
        </button>
      ) : (
        <button
          type="button"
          className="auth-btn"
          onClick={() => {
            clearCart();
            logout({
              returnTo: window.location.origin,
            });
          }}
        >
          Logout <FaUserMinus />
        </button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;

  .cart-btn {
    font-size: 1.2rem;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: 40px;
    background: var(--clr-red);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    padding: 12px;
  }

  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.2rem;
    cursor: pointer;
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }
`;
export default CartButtons;
