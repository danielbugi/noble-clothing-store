import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { links } from '../utils/constants';
import CartButtons from './CartButtons';
import { useProductsContext } from '../context/products_context';
import { useUserContext } from '../context/user_context';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar, openModal } = useProductsContext();
  const { myUser } = useUserContext();

  return (
    <SideBarContainer>
      <div
        className={isSidebarOpen ? 'background show-background' : 'background'}
        onClick={closeSidebar}
      ></div>
      <aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
        <div className="sidebar-header">
          <Link to="/">
            <h3 className="logo">noble</h3>
          </Link>
          <button className="close-btn" type="button" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          {links.map((link) => {
            const { id, url, text } = link;
            if (text === 'newsletter') {
              return (
                <li key={id}>
                  <Link to={url} onClick={openModal}>
                    {text}
                  </Link>
                </li>
              );
            }
            return (
              <li key={id}>
                <Link to={url} onClick={closeSidebar}>
                  {text}
                </Link>
              </li>
            );
          })}
          {myUser && (
            <li>
              <Link to="/checkout">Checkout</Link>
            </li>
          )}
        </ul>

        <CartButtons />
      </aside>
    </SideBarContainer>
  );
};

const SideBarContainer = styled.div`
  .background {
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.4);
    position: fixed;
    top: 0;
    cursor: pointer;
    opacity: 0;
    z-index: -1;
  }

  .show-background {
    opacity: 1;
    z-index: 10;
  }
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5rem;
    padding: 0 1rem;
    margin-bottom: 5rem;
    .logo {
      font-family: 'Montserrat', sans-serif;
      font-weight: 300;
      text-transform: uppercase;
      color: var(--clr-black);
    }
    .close-btn {
      font-size: 1.5rem;
      background: transparent;
      border-color: transparent;
      cursor: pointer;
    }
  }
  .links {
    margin-bottom: 5rem;
  }

  .links a {
    font-family: 'Oswald', sans-serif;
    text-transform: capitalize;
    display: block;
    font-size: 1.5rem;
    padding: 0.5rem 1rem;
    color: var(--clr-grey-4);
  }
  .links a:hover {
    background: var(--clr-grey-1);
  }

  .sub-links {
    margin-bottom: 5rem;
  }

  .sub-links a {
    display: block;
    text-transform: capitalize;
    padding: 0.5rem 1rem;
    font-size: 1rem;
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    justify-content: space-between;
    background: var(--clr-white);
    height: 100%;
    width: 20rem;
    z-index: -1;
    opacity: 0;
  }
  .show-sidebar {
    opacity: 1;
    z-index: 11;
  }
  .cart-btn-wrapper {
    margin: 0 auto;
  }
`;
export default Sidebar;
