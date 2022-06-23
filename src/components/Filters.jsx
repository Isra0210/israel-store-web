import { Form } from "react-bootstrap";
import { CartState } from "../context/Context";
import styled from "styled-components";

const FilterContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 16px 40px;
`;


const FilterTitle = styled.span`
	font-size: 18px;
	font-weight: 500;
`;

const ClearFiltersButton = styled.button`
	border-radius: 8px;
	padding: 4px 8px;
	background-color: white;
	border: 1px solid black;
	
	&:hover {
		box-shadow: 2px 2px 2px #888888;
		cursor: pointer;
	}
`;

const Filters = () => {
  const {
    productDispatch,
    productState: { sort },
  } = CartState();

  return (
    <FilterContainer>
      <FilterTitle>Ordenar</FilterTitle>
			<Form.Check
				inline
				label="Preço crescente"
				name="group1"
				type="radio"
				id={`inline-1`}
				onChange={() =>
					productDispatch({
						type: "SORT_BY_PRICE",
						payload: "lowToHigh",
					})
				}
				checked={sort === "lowToHigh" ? true : false}
			/>
			<Form.Check
				inline
				label="Preço decrescente"
				name="group1"
				type="radio"
				id={`inline-2`}
				onChange={() =>
					productDispatch({
						type: "SORT_BY_PRICE",
						payload: "highToLow",
					})
				}
				checked={sort === "highToLow" ? true : false}
			/>
			<Form.Check
				inline
				label="Nome A-Z"
				name="group1"
				type="radio"
				id={`inline-3`}
				onChange={() =>
					productDispatch({
						type: "SORT_BY_PRICE",
						payload: "az",
					})
				}
				checked={sort === "az" ? true : false}
			/>
			<Form.Check
				inline
				label="Nome Z-A"
				name="group1"
				type="radio"
				id={`inline-4`}
				onChange={() =>
					productDispatch({
						type: "SORT_BY_PRICE",
						payload: "za",
					})
				}
				checked={sort === "za" ? true : false}
			/>
      <ClearFiltersButton
        onClick={() =>
          productDispatch({
            type: "CLEAR_FILTERS",
          })
        }
      >
        Clear Filters
      </ClearFiltersButton>
    </FilterContainer>
  );
};

export default Filters;
