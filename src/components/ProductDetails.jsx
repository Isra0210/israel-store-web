import styled from "styled-components"
import Carousel from "./Carousel";
import { Close } from '@material-ui/icons';
import { CartState } from "../context/Context";
import { formatPrice } from "../context/Utils";

const Container = styled.div`
	height: 90vh;
	display: flex;
	background-color: white;
	border-radius: 26px;
	min-width: 500px;
	flex-direction: column;
`;

const InfoContainer = styled.div`
	padding: 10px;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
`;

const Details = styled.div`
	display: flex;
	flex: 1;
	flex-wrap: wrap;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;

const DetailsInfo = styled.p`
	margin: 0px 16px;
	font-size: 16px;
	font-weight: 600;
`;

const Title = styled.h1`
	font-weight: 400;
`;

const Circle = styled.div`
	margin: 10px;
	height: 26px;
	width: 26px;
	position: absolute;
	top: 0;
	right: 0;
	z-index: 3;
	background-color: white;
	border-radius: 50%;
	display: flex;
	align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const PriceContainer = styled.div`
	padding: 12px 0px;
	height: 40px;
	width: 100%;
	background-color: black;
	align-items: center;
	display: flex;
	justify-content: center;
`;

const Price = styled.p`
	margin-left: 40px;
	font-size: 20px;
	color: white;
	font-weight: 500;
`;


const FinancingContainer = styled.div`
	display: flex;
	flex: 2;
	height: 60px;
	width: 100%;
	align-items: center;
	justify-content: space-evenly;
`;

const SendMessage = styled.button`
	border-radius: 8px;
	color: blue;
	height: 30;
	padding: 10px;
	background-color: white;
	border: 1px solid blue;
	cursor: pointer;
	font-weight: 600;
	box-shadow: 1px 1px black;
`;

const FinancingSimulation = styled.button`
	border-radius: 8px;
	background-color: blue;
	color: white;
	height: 30;
	padding: 10px;
	border: 1px solid blue;
	cursor: pointer;
	font-weight: 600;
	box-shadow: 1px 1px black;
`;	

const AddToCartButton = styled.button`
	border-radius: 8px;
	background-color: white;
	color: black;
	height: 30;
	padding: 10px;
	border: 1px solid black;
	cursor: pointer;
	font-weight: 600;
	box-shadow: 1px 1px black;
`;

const RemoveToCartButton = styled.button`
	border-radius: 8px;
	background-color: red;
	color: white;
	height: 30;
	padding: 10px;
	border: 1px solid black;
	cursor: pointer;
	font-weight: 600;
	box-shadow: 1px 1px black;
`;	

const ProductDetails = ({prod, onClose}) => {
	const {
    state: { cart },
    dispatch,
  } = CartState();
	
	
	return (
		<Container>
			<Carousel item={prod} key={prod.id}/>
			<InfoContainer>
				<Title>
					{prod.title}
				</Title>
			</InfoContainer>
			<Details>
				<DetailsInfo>Ano: {prod.year}</DetailsInfo>
				<DetailsInfo>Km: {prod.km}</DetailsInfo>
				<DetailsInfo>Combustível: {prod.fuel}</DetailsInfo>
				<DetailsInfo>Cor: {prod.color}</DetailsInfo>
			</Details>
			<FinancingContainer>
				<SendMessage>Enviar mensagem</SendMessage>
				<FinancingSimulation>Simular Financiamento</FinancingSimulation>
				{
					cart.some((p) => p.id === prod.id) ?
						<RemoveToCartButton
							onClick={() =>
								dispatch({
									type: "REMOVE_FROM_CART",
									payload: prod,
								})
							}
						>
							Remover do carrinho
						</RemoveToCartButton>					
					:	<AddToCartButton
							onClick={() =>
								dispatch({
									type: "ADD_TO_CART",
									payload: prod,
								})
							}
						>
							Adicionar ao carrinho
						</AddToCartButton>						
				}
			</FinancingContainer>
			<PriceContainer>
				<Price>Preço: {formatPrice(prod.price)}</Price>
			</PriceContainer>
			<Circle onClick={onClose}>
				<Close  style={{height: "20px"}}/>
			</Circle>
		</Container>
	)
}

export default ProductDetails