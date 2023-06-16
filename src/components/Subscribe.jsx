import { styled } from 'styled-components';

const Subscribe = () => {
  return (
    <Wrapper className="section-center">
      <div className="form-control">
        <h4>subscribe</h4>
        <p>To get special offers and VIP treatment</p>
        <form
          action="https://formspree.io/f/xknadbqj"
          method="POST"
          className="sub-form"
        >
          <input type="email" name="subscribe" placeholder="Enter your email" />
          <button type="submit" className="btn btn-red">
            subscribe
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: auto;
  display: grid;
  align-items: center;
  background: var(--clr-black);
  color: var(--clr-white);
  .form-control {
    height: auto;
    padding: 3rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h4 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
    p {
      margin-bottom: 1rem;
    }
    form {
      width: 100%;
      display: flex;
      flex-direction: column;
      input {
        height: 3rem;
        padding-left: 1rem;
        font-size: 1rem;
        margin-bottom: 1rem;
      }
      button {
        border: none;
        display: block;
        padding: 1rem 0;
        width: 6rem;
        text-align: center;
        cursor: pointer;
        font-weight: bold;
      }
    }
  }
`;
export default Subscribe;
