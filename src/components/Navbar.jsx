import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { links } from '../utils/constants';
import CartButtons from './CartButtons';
import { useProductsContext } from '../context/products_context';

const Navbar = () => {
  const { openSidebar, handleClickScrollContact, openModal } =
    useProductsContext();

  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <h3 className="logo">noble</h3>
          </Link>
          <button type="button" className="nav-toggle" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {links.map((link) => {
            const { id, text, url } = link;
            {
              if (text === 'contact') {
                return (
                  <li key={id}>
                    <Link to={url} onClick={handleClickScrollContact}>
                      {text}
                    </Link>
                  </li>
                );
              }
              if (text === 'newsletter') {
                return (
                  <li key={id}>
                    <Link to={url} onClick={openModal}>
                      {text}
                    </Link>
                  </li>
                );
              }
            }
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
        </ul>
        <CartButtons />
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  position: absolute;
  top: 0;
  z-index: 9;
  width: 100vw;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--clr-black);
  .nav-center {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
      font-family: 'Montserrat', sans-serif;
      font-weight: 300;
      padding-left: 1rem;
      text-transform: uppercase;
      color: var(--clr-white);
    }
  }
  .nav-toggle {
    background: transparent;
    height: 100%;
    padding: 0 1rem;
    border: transparent;
    color: var(--clr-white);
    cursor: pointer;
    svg {
      font-size: 1.7rem;
    }
    &:hover {
      background: var(--clr-grey-1);
      color: var(--clr-black);
    }
  }
  .nav-links {
    display: none;
    font-family: 'Oswald', sans-serif;
  }
  .cart-btn-wrapper {
    display: none;
  }

  @media screen and (min-width: 992px) {
    background: var(--clr-white);

    .nav-toggle {
      display: none;
    }

    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-header {
      .logo {
        color: var(--clr-black);
      }
    }

    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
      }
      a {
        color: var(--clr-black);

        padding: 0.5rem 1rem;
        &:hover {
          background: var(--clr-grey-2);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`;
export default Navbar;
