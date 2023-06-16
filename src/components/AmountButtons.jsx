import { FaPlus, FaMinus } from 'react-icons/fa';
import { styled } from 'styled-components';
// eslint-disable-next-line react/prop-types
const AmountButtons = ({ amount, decrease, increase }) => {
  return (
    <Wrapper className="amount-btns">
      <button type="button" className="amount-btn" onClick={decrease}>
        <FaMinus />
      </button>
      <h3 className="amount">{amount}</h3>
      <button type="button" className="amount-btn" onClick={increase}>
        <FaPlus />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  width: 140px;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  margin: 1rem 0;

  button {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    padding: 1rem 0;
    width: 2rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export default AmountButtons;
