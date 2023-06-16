import { styled } from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { useProductsContext } from '../context/products_context';

const NewsLetter = () => {
  const { show_modal, closeModal } = useProductsContext();
  return (
    <Wrapper className={show_modal ? 'section-modal active' : 'section-modal'}>
      <div
        className={show_modal ? 'modal-container active' : 'modal-container'}
      >
        <FaTimes className="icon" onClick={closeModal} />
        <h3>newsletter</h3>
        <p>
          Join our mailing list to receive updates on new arrivals and special
          offers.
        </p>
        <form
          action="https://formspree.io/f/xknadbqj"
          method="POST"
          className="form-input"
          name=""
        >
          <input type="email" name="subscribe" placeholder="Enter e-mail" />
          <button type="submit" className="btn btn-red">
            subscribe
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .icon {
    position: absolute;
    top: 2rem;
    right: 2rem;
    font-size: 2rem;
    cursor: pointer;
  }
  h3 {
    font-weight: 300;
    text-transform: uppercase;
    margin: 0.5rem 0;
  }
  p {
    font-size: 0.95rem;
    margin: 1rem 0;
  }

  .active-modal .modal-container {
    transform: scale(1);
  }

  @media screen and (max-width: 740px) {
    .modal-container {
      width: 80vw;
      padding-top: 4rem;
    }
  }
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    input {
      width: 100%;
      height: 3rem;
      padding-left: 1rem;
      font-size: 1rem;
      margin-bottom: 1rem;
      border: 1px solid var(--clr-grey-2);
    }
    button {
      border: none;
      display: block;
      padding: 1rem 0;
      width: 7rem;
      text-align: center;
      cursor: pointer;
      font-weight: bold;
    }
  }
`;
export default NewsLetter;
