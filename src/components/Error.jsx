import { styled } from 'styled-components';

const Error = () => {
  return (
    <Wrapper className="page-100">
      <h2>there was an error...</h2>
      <h3>retrieving back to home page</h3>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  background: var(--clr-primary-10);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  h2 {
    margin-bottom: 2rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
    text-transform: capitalize;
  }
`;
export default Error;
