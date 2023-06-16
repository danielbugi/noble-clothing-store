import { styled } from 'styled-components';
import { useProductsContext } from '../context/products_context';
import Product from './Product';
import Loading from './Loading';
import Error from './Error';
import { Link } from 'react-router-dom';

const FeaturedProducts = () => {
  const {
    featured_products: featured,
    products_loading: loading,
    products_error: error,
  } = useProductsContext();

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <Wrapper className="section">
      <div className="section-center">
        <div className="featured">
          {featured.map((product) => {
            return <Product key={product.id} {...product} />;
          })}
        </div>
        <Link to="/shop" className="btn">
          all products
        </Link>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .section-center {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .featured {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 2rem;
    width: 100%;
  }
  .btn {
    margin-top: 2rem;
    padding: 1rem 2rem;
  }
  @media screen and (max-width: 992px) {
    .featured {
      grid-template-columns: 1fr 1fr;
    }
  }
`;
export default FeaturedProducts;
