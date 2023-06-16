import { Link, useNavigate, useParams } from 'react-router-dom';
import { useProductsContext } from '../context/products_context';
import { Error, Loading, ProductImages, AddToCart } from '../components';
import { useEffect, useState } from 'react';
import { products_url as url } from '../utils/constants';
import { styled } from 'styled-components';
import { formatPrice } from '../utils/helpers';

const SingleProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showDesc, setShowDesc] = useState(false);
  const [showSku, setShowSku] = useState(false);

  const toggleDesc = () => {
    setShowDesc(!showDesc);
  };
  const toggleSku = () => {
    setShowSku(!showSku);
  };

  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(`${url}/${id}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate('/');
      }, 5000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error error={error} />;
  }

  const { name, description, id: sku, images, price } = product;

  return (
    <Wrapper>
      <div className="section section-center page">
        <div className="product-center">
          <section className="content">
            <Link to="/shop" className="btn">
              back to shop
            </Link>
            <h2>{name}</h2>
            <h5 className="price">{formatPrice(price)}</h5>
            <AddToCart product={product} />

            <div className="card-wrapper">
              {/* description */}
              <div className="card-toggle" onClick={toggleDesc}>
                <p>description</p>
                <button>{showDesc ? '-' : '+'}</button>
              </div>

              {showDesc && <p className="card-text">{description}</p>}

              {/* SKU */}
              <div className="card-toggle" onClick={toggleSku}>
                <p>sku</p>
                <button>{showSku ? '-' : '+'}</button>
              </div>

              {showSku && <p className="card-text">{sku}</p>}
            </div>
          </section>
          <ProductImages images={images} />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .page {
    margin-top: 5rem;
  }
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .content {
    height: 100%;
  }
  .btn {
    margin-bottom: 2rem;
  }
  h2 {
    margin-bottom: 1.5rem;
    padding: 0 1rem;
  }
  h5 {
    margin-bottom: 1.5rem;
    padding: 0 1rem;
  }
  .card-wrapper {
    margin-top: 1.5rem;
  }
  .card-toggle {
    display: flex;
    justify-content: space-between;
    padding: 0.6rem 1rem;
    margin: 0.4rem 0;
    border-bottom: 1px solid #ddd;
    text-transform: capitalize;
    cursor: pointer;
    &:hover {
      background: #f8f8f8;
    }
    button {
      background: transparent;
      border-color: transparent;
    }
  }
  .card-text {
    padding: 0.6rem 1rem;
    margin: 0.4rem 0;
    border-bottom: 1px solid #ddd;
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;
export default SingleProductPage;
