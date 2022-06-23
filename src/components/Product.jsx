import { CartState } from "../context/Context";
import { useState } from 'react';
import { ShoppingCartOutlined } from '@material-ui/icons';
import Dialog from '@material-ui/core/Dialog';
import styled from "styled-components";
import ProductDetails from "./ProductDetails";
import { formatPrice } from "../context/Utils";

const Container = styled.div`
	flex: 1;
	margin: 10px;
	min-width: 280px;
	height: 350px;
	align-items: center;
	justify-content: center;
	background-color: #FAF9F6;
	border-radius: 15px;
	box-shadow: 1px 1px #808080;
	cursor: pointer;
`;

const Image = styled.img`
	height: 74%;
	width: 100%;
	border-top-left-radius: 15px;
	border-top-right-radius: 15px;
`;

const Info = styled.div`
	padding: 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Icon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: white;
	align-items: center;
	justify-content: center;
	display: flex;
	cursor: pointer;
	box-shadow: 1px 1px gray;
	&:hover {
    background-color: whitesmoke;
    transform: scale(1.1);
  }
`;

const Description = styled.div``;

const Title = styled.p`
	font-size: 16px;
	font-weight: 600;
`;

const Price = styled.p`
	font-size: 14px;
	font-weight: 400;
`;

const Product = ({ prod }) => {
  const {
  } = CartState();
	
	const [open, setOpen] = useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  return (
		<div>
			<Container onClick={handleClickOpen}>
				<Image src={prod.img}/>
				<Info>
					<Description>
						<Title>
							{prod.title}
						</Title>
						<Price style={{"margin-top": "10px"}}>
							{formatPrice(prod.price)}
						</Price>
					</Description>
					<Icon>
						<ShoppingCartOutlined/>
					</Icon>
				</Info>
			</Container>
			<Dialog open={open} onClose={handleClose}>
				<ProductDetails prod={prod} key={prod.id} onClose={handleClose}/>
      </Dialog>
		</div>
  );
};

export default Product;