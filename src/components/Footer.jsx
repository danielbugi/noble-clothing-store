import { styled } from 'styled-components';
import { footerLinks } from '../utils/constants';
import { Link } from 'react-router-dom';
import {
  MdOutlineLocationOn,
  MdPhone,
  MdMail,
  MdCreditScore,
  MdCreditCard,
} from 'react-icons/md';
import {
  FaFacebookSquare,
  FaInstagram,
  FaPinterestP,
  FaTiktok,
  FaTwitter,
} from 'react-icons/fa';
import { useEffect, useRef } from 'react';
import { useProductsContext } from '../context/products_context';

const Footer = () => {
  const { setScrollToContact } = useProductsContext();

  const contactRef = useRef(null);

  useEffect(() => {
    setScrollToContact(contactRef);
  }, [setScrollToContact]);

  const date = new Date();

  return (
    <Wrapper>
      <div className="section-center">
        {/* contact */}
        <div className="contact footer-box" ref={contactRef}>
          <h5>Contact</h5>
          <p>Questions? Go ahead.</p>
          <form
            action="https://formspree.io/f/xknadbqj"
            method="POST"
            className="form-contact"
          >
            <input type="text" name="name" placeholder="Name" />
            <input type="email" name="email" placeholder="Email" />
            <input type="text" name="subject" placeholder="Subject" />
            <input type="text" name="message" placeholder="Message" />
            <button type="submit" className="btn">
              send
            </button>
          </form>
        </div>
        {/* about */}
        <div className="about footer-box">
          <h5>about</h5>
          <ul className="links-container">
            {footerLinks.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <Link to={url}>{text}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        {/* store */}
        <div className="footer-box store ">
          <h5>store</h5>
          <p>
            <span>
              <MdOutlineLocationOn />
            </span>
            company name
          </p>
          <p>
            <span>
              <MdPhone />
            </span>
            0044123123
          </p>
          <p>
            <span>
              <MdMail />
            </span>
            noble@mail.com
          </p>
          <h5>we accept</h5>
          <p>
            <span>
              <MdCreditCard />
            </span>
            amex
          </p>
          <p>
            <span>
              <MdCreditScore />
            </span>
            credit card
          </p>
          <div className="social-box">
            <a href="/www.facebook.com">
              <FaFacebookSquare />
            </a>
            <a href="/www.facebook.com">
              <FaInstagram />
            </a>
            <a href="/www.facebook.com">
              <FaPinterestP />
            </a>
            <a href="/www.facebook.com">
              <FaTiktok />
            </a>
            <a href="/www.facebook.com">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
      <div className="powered-by">
        <p>
          Powered <span>DB.media</span>
          <span> {date.getFullYear()} &copy;</span>
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  .section-center {
    background: var(--clr-grey-1);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 4rem 0;

    .footer-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 0.5rem;
      h5 {
        margin: 0.5rem 0;
      }
      p {
        margin: 0.5rem 0;
        font-size: 0.8rem;
      }
    }

    .form-contact {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      input {
        padding: 0.5rem;
        border: 1px solid var(--clr-grey-2);
      }
      button {
        border: none;
      }
    }
  }
  .about {
    .links-container {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    li {
      text-align: center;
      a {
        text-decoration: underline;
        font-size: 0.8rem;
        text-transform: capitalize;
      }
    }
  }
  .store {
    svg {
      margin-right: 5px;
    }
    p {
      width: 100%;
    }
    h5 {
      width: 100%;
    }
    .social-box {
      align-self: start;
      margin-top: 2rem;
      svg:hover {
        color: var(--clr-grey-4);
      }
    }
  }
  .powered-by {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
    height: 5rem;
    background: var(--clr-black);
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      color: var(--clr-white);
      span:first-child {
        text-decoration: underline;

        cursor: pointer;
      }
    }
  }
  @media screen and (max-width: 772px) {
    .section-center {
      grid-template-columns: 1fr 1fr;
      overflow: hidden;
      grid-template-areas:
        'a a'
        'b c';
    }
    .contact {
      grid-area: a;
    }
    .store {
      grid-area: b;
    }
    .about {
      grid-area: c;
    }
  }
`;
export default Footer;
