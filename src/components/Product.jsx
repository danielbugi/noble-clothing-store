import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { formatPrice } from '../utils/helpers';

// eslint-disable-next-line react/prop-types
const Product = ({ id, name, price, image }) => {
  return (
    <Wrapper>
      <div className="container">
        <img src={image} alt={name} />
        <Link to={`/shop/${id}`} className="btn link">
          Shop Now
        </Link>
      </div>
      <footer>
        <p>{name}</p>
        <h5>{formatPrice(price)}</h5>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .container {
    position: relative;
    z-index: 1;
  }
  img {
    width: 100%;
    height: 25rem;
    display: block;
    object-fit: cover;
  }

  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 1.5rem;
    text-align: center;
    margin: 0;
    display: none;
    cursor: pointer;
    z-index: 3;
  }
  .container:hover .link {
    display: block;
  }
  .container:hover::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background: rgba(117, 117, 117, 0.5);
  }
  footer {
    p {
      margin: 0.5rem 0;
      text-transform: capitalize;
    }
  }
  @media screen and (max-width: 992px) {
    img {
      height: 260px;
    }
    .link {
      position: static;
      display: block;
      transform: translate(0);
      cursor: pointer;
    }
    .container {
      cursor: pointer;
    }
    .container:hover::after {
      display: none;
    }
  }

  @media screen and (max-width: 400px) {
    img {
      height: 12rem;
    }
  }
`;

export default Product;
