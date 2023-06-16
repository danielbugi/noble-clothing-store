import { styled } from 'styled-components';
import { useFilterContext } from '../context/filter_context';
import Product from './Product';

const ProductList = () => {
  const { filtered_products: products } = useFilterContext();

  if (products.length < 1) {
    return (
      <h5 style={{ textTransform: 'none' }}>
        Sorry, no products matched your search...
      </h5>
    );
  }

  return (
    <Wrapper>
      <div className="products-container">
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  img {
    height: 260px;
  }
  .products-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem 1.5rem;
  }
  @media (min-width: 992px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;
export default ProductList;
