/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import AmountButtons from './AmountButtons';
import { useCartContext } from '../context/cart_context';

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();
  const { color, id, size } = product;
  const [mainColor, setMainColor] = useState(color?.[0]);
  const [mainSize, setMainSize] = useState(size?.[0]);
  const [amount, setAmount] = useState(1);

  const increase = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1;
      return tempAmount;
    });
  };

  const decrease = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };

  return (
    <Wrapper>
      <div className="colors">
        <span>colors :</span>
        <div>
          {color &&
            color.map((c, index) => {
              return (
                <div
                  className={`${
                    mainColor === c ? 'border-btn active' : 'border-btn'
                  }`}
                  key={index}
                  onClick={() => setMainColor(c)}
                >
                  <button
                    style={{ background: c }}
                    className="color-btn"
                  ></button>
                </div>
              );
            })}
        </div>
      </div>
      <div className="size">
        <span>size :</span>
        <div>
          {size &&
            size.map((s, index) => {
              return (
                <button
                  key={index}
                  onClick={() => setMainSize(s)}
                  className={mainSize === s ? 'size-btn active' : 'size-btn'}
                >
                  {s}
                </button>
              );
            })}
        </div>
      </div>
      <AmountButtons amount={amount} increase={increase} decrease={decrease} />
      <div className="btn-container">
        <Link
          to="/cart"
          className="btn"
          onClick={() => addToCart(id, mainColor, mainSize, amount, product)}
        >
          add to cart
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 0 1rem;
  margin-bottom: 2rem;
  .colors {
    margin-bottom: 1rem;
    display: flex;
    span {
      text-transform: capitalize;
      font-weight: 500;
      margin-right: 1rem;
    }
    div {
      display: flex;
    }
  }
  .border-btn {
    border: 1px solid var(--clr-grey-2);
    height: 1.4em;
    width: 1.4rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    cursor: pointer;
    &:hover:not(.active) {
      border: 2px solid var(--clr-grey-2);
    }
  }
  .color-btn {
    display: inline-block;
    width: 12px;
    height: 12px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
  }

  .size {
    display: flex;
    align-items: center;
    span {
      margin-right: 1rem;
    }
  }

  .size-btn {
    background: transparent;
    padding: 0.5rem;
    margin-right: 0.5rem;
    border: 1px solid var(--clr-grey-2);
    cursor: pointer;
    &:hover:not(.active) {
      border: 2px solid var(--clr-grey-2);
    }
  }

  .active {
    border: 2px solid var(--clr-black);
  }

  .btn {
    display: block;
    padding: 1rem;
    margin-top: 2rem;
    text-align: center;
    background: #ffff00;
    color: black;
    font-size: 1.5rem;
    font-weight: 600;
    &:hover {
      background: black;
      color: white;
    }
  }
`;
export default AddToCart;
