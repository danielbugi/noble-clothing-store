import { useState } from 'react';
import { styled } from 'styled-components';

// eslint-disable-next-line react/prop-types
const ProductImages = ({ images = [{ url: '' }] }) => {
  const [main, setMain] = useState(images[0]);

  return (
    <Wrapper>
      <img src={main.url} alt="main" className="main" />
      <div className="gallery">
        {images.slice(0, 5).map((image, index) => {
          return (
            <img
              src={image.url}
              key={index}
              alt={image.filename}
              onClick={() => setMain(images[index])}
              className={`${image.url === main.url ? 'active' : null}`}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .main {
    height: 600px;
  }
  img {
    width: 100%;
    display: block;
    object-fit: cover;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    box-shadow: 0px 0px 0px 2px var(--clr-black);
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`;
export default ProductImages;
