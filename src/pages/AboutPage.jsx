import { styled } from 'styled-components';
import AboutPic1 from '../assets/about-pic1.jpg';
import AboutPic2 from '../assets/about-pic2.jpg';

const AboutPage = () => {
  return (
    <main>
      <Wrapper className="section-center">
        <div className="content">
          <h3>style your self up</h3>
          <h4>our story</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            numquam exercitationem hic voluptates inventore voluptas vel. Vitae
            commodi rerum eos quia alias ab, possimus neque, consequuntur sint
            non, aliquid fuga nesciunt nihil illo assumenda. Sint tempore illum
            aliquid id exercitationem.
          </p>
          <h4>our mission</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            numquam exercitationem hic voluptates inventore voluptas vel. Vitae
            commodi rerum eos quia alias ab, possimus neque, consequuntur sint
            non, aliquid fuga nesciunt nihil illo assumenda. Sint tempore illum
            aliquid id exercitationem.
          </p>
        </div>
        <div className="images-container">
          <img src={AboutPic1} alt="choose your style" className="about-img1" />
          <img src={AboutPic2} alt="choose your style" className="about-img2" />
        </div>
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.section`
  height: 90vh;
  margin-top: 6rem;
  margin-bottom: 10rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  .images-container {
    height: auto;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      z-index: 2;
      width: 24rem;
      height: 40rem;
      background: var(--clr-grey-3);
      left: 3rem;
      top: 6rem;
    }

    .about-img1 {
      height: 18rem;
      width: 25rem;
      position: absolute;
      z-index: 3;
      bottom: 90px;
    }
    .about-img2 {
      height: 34rem;
      width: 25rem;
      position: absolute;
      z-index: 2;
      right: 0;
      top: 5rem;
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 5rem 4rem 5rem 0;
    h3 {
      margin-bottom: 3rem;
    }
    h4 {
      margin-bottom: 2rem;
    }
    p {
      margin-bottom: 1rem;
      letter-spacing: var(--spacing);
    }
  }
  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr;
    height: auto;
    .images-container {
      display: none;
    }
    .content {
      width: 100%;
      padding: 5rem 1rem;
    }
  }
`;

export default AboutPage;
