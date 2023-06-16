import { styled } from 'styled-components';
import { getUniqueValue } from '../utils/helpers';
import { useFilterContext } from '../context/filter_context';

const Filters = () => {
  const {
    all_products,
    updateFilters,
    filters: { category },
  } = useFilterContext();

  const categories = getUniqueValue(all_products, 'category');

  return (
    <Wrapper>
      <div className="form-control">
        <h5>categories</h5>
        <div className="categories">
          {categories.map((c, index) => {
            return (
              <button
                key={index}
                onClick={updateFilters}
                name="category"
                type="button"
                className={`${category === c.toLowerCase() ? 'active' : null}`}
              >
                {c}
              </button>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 4rem;
    }
  }
  .categories {
    display: flex;
    flex-direction: column;

    button {
      display: block;
      padding: 0.5rem;
      text-align: start;
      font-family: 'Oswald', sans-serif;
      font-weight: 500;
      font-size: 1.5rem;
      text-transform: capitalize;
      cursor: pointer;
      background: transparent;
      border-color: transparent;
      color: var(--clr-grey-3);
      &:hover {
        background: var(--clr-grey-1);
      }
    }
    .active {
      color: var(--clr-black);
    }
  }
  @media (min-width: 768px) {
    .form-control {
      position: sticky;
      top: 1rem;
    }
  }
`;

export default Filters;
