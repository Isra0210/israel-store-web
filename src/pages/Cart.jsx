import { useEffect, useState } from "react";
// import { Button, Col, Form, Image,
import { ListGroup, Row } from "react-bootstrap";
import { AiOutlinePlus, AiOutlineMinus, AiFillDelete } from "react-icons/ai";
import { CartState } from "../context/Context";
import Header from "../components/Header";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import styled from "styled-components";
import { formatPrice } from "../context/Utils";

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
`;

//TODO
// const TopText = styled.span`
//   text-decoration: underline;
//   cursor: pointer;
//   margin: 0px 10px;
// `;

const Bottom = styled.div`
  display: flex;
  justify-content: space-evenly;
	margin: 20px;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-around;
	align-items: center;
	justify-content: center;
`;

const ProductDetail = styled.div`
  flex: 5;
  display: flex;
`;

const Image = styled.img`
  width: 250px;
	border-radius: 16px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProductName = styled.span``;


const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
	border: 1px solid white;
  background-color: #${(props) => props.color};
`;

const ProductKm = styled.span``;

const ProductYear = styled.span``;

const PriceDetail = styled.div`
  align-items: center;
  justify-content: center;
	margin-top: 16px;;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
	margin-right: 50px;
	justify-content: center;
`;

const ProductAmount = styled.div`
  font-size: 30px;
  margin: 8px;
	margin-right: 16px;
	flex: 1;
	align-content: center;
	justify-content: center;
`;

const ProductPrice = styled.div`
	display: flex;
  font-size: 28px;
  font-weight: 200;
	width: 80%;
`;

const Hr = styled.hr`
  background-color: gray;
  border: none;
  height: 1px;
	margin: 20px 0px;
`;

const Summary = styled.div`
	margin-left: 50px;
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 55vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
	margin-top: 10px;
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
	border: none;
	cursor: pointer;
`;

const Arrow = styled.div`
	width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  left: ${(props) => props.direction === "left" && "20px"};
  right: ${(props) => props.direction === "right" && "20px"};
  margin: auto;
  cursor: pointer;
	box-shadow: 1px 1px 2px  gray;
`;

const CartEmpty = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 26px;
	font-weight: 400;
	margin-top: 60px;
`;

const PriceContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: auto;
	text-align: center;
	width: 30%;
`;

const DeletedButton = styled.button`
	display: flex;
	width: 80%;
	padding: 6px;
	border: none;
	border-radius: 18px;
	align-items: center;
	justify-content: center;
	flex: 5;
	background-color: white;
	color: black;
	cursor: pointer;
	box-shadow: 1px 1px 3px black;
`;

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

	const [total, setTotal] = useState();
	
  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);
	
  return (
    <div>
			<Header/>
	 		<Announcement/>
	 		 <Wrapper>
	 			<Top>
	 				<Title>Carrinho</Title>
	 			</Top>
	 			<Bottom>
	 				<Info>
						{
							cart.length === 0 ? <CartEmpty>Carrinho vazio!</CartEmpty> : 
							cart.map((prod) =>  (
								<div>
									 <Product key={prod.id}>
										<ProductDetail>
											<Image src={prod.img}/>
											<Details>
												<ProductName><b>Modelo:</b>{prod.title}</ProductName>
												<ProductYear><b>Ano:</b>{prod.year}</ProductYear>
												<ProductKm><b>KM:</b>{prod.km}</ProductKm>
												<ProductColor color={prod.colorCode}/>
											</Details>
										</ProductDetail>
										<PriceContainer>
											<ProductPrice>{formatPrice(prod.price)}</ProductPrice>
											<PriceDetail>
												<ProductAmountContainer>
													<Arrow 
														onClick={prod.qty > 1 ? () =>
															dispatch({
																type: "CHANGE_CART_QTY",
																payload: {
																	id: prod.id,
																	qty: prod.qty-1,
																},
															}) : () => {}
														}
													>
														<AiOutlineMinus/>
													</Arrow> 
													<ProductAmount>{prod.qty}</ProductAmount> 
													<Arrow
															onClick={() =>
																dispatch({
																	type: "CHANGE_CART_QTY",
																	payload: {
																		id: prod.id,
																		qty: prod.qty+1,
																	},
																})
															}
													>
														<AiOutlinePlus/>
													</Arrow>
												</ProductAmountContainer>
												<DeletedButton 
													onClick={() =>
                      			dispatch({
                        			type: "REMOVE_FROM_CART",
                        			payload: prod,
                      		})
                    		}>
													<AiFillDelete fontSize="20px" />
												</DeletedButton>
											</PriceDetail>
										</PriceContainer>
									</Product> 
									<Hr/>
								</div>
							))
						}
	 				</Info>
	 				<Summary>
             <SummaryTitle>RESUMO</SummaryTitle>
             <SummaryItem>
               <SummaryItemText>Valor da compra</SummaryItemText>
               <SummaryItemPrice>{formatPrice(total)}</SummaryItemPrice>
             </SummaryItem>
             <SummaryItem>
               <SummaryItemText>Estimativa de entrega</SummaryItemText>
               <SummaryItemPrice>{formatPrice(total * 0.05)}</SummaryItemPrice>
             </SummaryItem>
             <SummaryItem>
               <SummaryItemText>Desconto</SummaryItemText>
               <SummaryItemPrice>{formatPrice(total * 0.01)}</SummaryItemPrice>
             </SummaryItem>
             <SummaryItem type="total">
               <SummaryItemText>Total</SummaryItemText>
               <SummaryItemPrice>{formatPrice(total- (total * 0.01) + (total * 0.05))}</SummaryItemPrice>
             </SummaryItem>
             <Button>Finalizar compra</Button>
           </Summary> 
	 			</Bottom>
	 		</Wrapper> 
	 		<Footer/>
    </div>
  );
};

export default Cart;
