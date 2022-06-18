import { CartState } from "../context/Context";
import Header from "../components/Header";
import Announcement from "../components/Announcement";
import Filters from "../components/Filters";
import Product from "../components/Product";import Footer from "../components/Footer";
import styled from "styled-components";

const Container = styled.div`
	padding: 0px 20px;
	padding-bottom: 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

const TitleContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 20vh;
`;

const Title = styled.h1`
	font-weight: 400;
	font-size: 40px;
`;

const Stock = () => {
	const {
    state: { products },
    productState: { sort },
  } = CartState();

  const transformProducts = () => {
    let sortedProducts = products;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }
    return sortedProducts;
  };

	return (
		<div>
			<Header/>
			<Announcement/>
			<TitleContainer>
					<Title>Estoque</Title>
			</TitleContainer>
			<Filters />
			<Container>
				{ 
					transformProducts().map(
						(prod) => (
							<Product prod={prod} key={prod.id} />
						)
					)
				}
			</Container>
			<Footer/>
		</div>
	)
}

export default Stock