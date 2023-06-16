import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import heroBg from '../assets/hero.jpg';

const Hero = () => {
  return (
    <Wrapper className="section-center ">
      <img src={heroBg} alt="hero" className="hero-img" />
      <div className="content">
        <h2>new arrivals</h2>
        <p>collection 2023</p>
        <Link to="/shop" className="btn hero-btn">
          shop now
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 5rem;
  min-height: 90vh;
  position: relative;
  overflow: hidden;

  .hero-img {
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    width: 100%;
    object-fit: cover;
  }
  .content {
    z-index: -1;
    padding: 2rem;
    color: var(--clr-white);
    h2 {
      font-size: 4.5rem;
      margin-bottom: 2rem;
    }
    p {
      font-size: 2.5rem;
      margin-bottom: 2rem;
    }
    .hero-btn {
      padding: 1rem 2rem;
    }
  }

  @media screen and (max-width: 992px) {
    margin-top: 6rem;
    min-height: 60vh;
    .content {
      h2 {
        font-size: 3.5rem;
      }
      p {
        font-size: 2rem;
      }
    }
  }

  @media screen and (max-width: 520px) {
    min-height: 20vh;
    .content {
      h2 {
        font-size: 2rem;
      }
      p {
        font-size: 1.5rem;
      }
    }
  }
`;

export default Hero;
