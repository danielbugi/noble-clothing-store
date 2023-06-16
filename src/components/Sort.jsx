import { styled } from 'styled-components';
import { getUniqueValue } from '../utils/helpers';
import { useFilterContext } from '../context/filter_context';

const Sort = () => {
  const {
    all_products,
    filtered_products,
    sort,
    updateSort,
    updateFilters,
    filters: { gender },
  } = useFilterContext();
  const genders = getUniqueValue(all_products, 'sex');
  const fixedGenders = genders.splice(0, 3);

  return (
    <Wrapper>
      <div className="btn-container">
        {fixedGenders.map((g, index) => {
          return (
            <button
              key={index}
              type="button"
              name="gender"
              onClick={updateFilters}
              className={`${gender === g.toLowerCase() ? 'active' : null}`}
            >
              {g}
            </button>
          );
        })}
      </div>
      <p>{filtered_products.length} Products found</p>
      <hr />
      <form>
        <label htmlFor="sort">sort by</label>
        <select
          name="sort"
          id="sort"
          className="sort-input"
          value={sort}
          onChange={updateSort}
        >
          <option value="price-lowest">price (lowest)</option>
          <option value="price-highest">price (highest)</option>
          <option value="name-a">name (a-z)</option>
          <option value="name-z">name (z-a)</option>
        </select>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  align-items: center;
  margin-bottom: 2rem;
  @media (max-width: 576px) {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.75rem;
    .btn-container {
      width: 50px;
    }
    label {
      display: inline-block;
      margin-right: 0.5rem;
    }
  }
  @media (min-width: 768px) {
    column-gap: 2rem;
  }
  p {
    text-transform: capitalize;
    margin-bottom: 0;
  }

  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 0.5rem;
    button {
      text-transform: capitalize;
      background: transparent;
      border: 1px solid var(--clr-black);
      height: 1.5rem;
      width: 3.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
    .active {
      border: 2px solid var(--clr-black);
    }
    button:active {
      transform: translateY(2px);
    }
  }

  .sort-input {
    border-color: transparent;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
  }
  label {
    font-size: 1rem;
    text-transform: capitalize;
  }
`;
export default Sort;
