import { Link } from "react-router-dom";
import { CartState } from "../context/Context";
import { Badge } from '@material-ui/core'
import { ShoppingCartOutlined } from '@material-ui/icons'
import styled from 'styled-components'


const Container = styled.div `
	height: 100px;
	background-color: white;
`
const Wrapper = styled.div `
	padding: 30px 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	justify-content: center;
`

const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
`

const Center = styled.div`
	flex: 1;
	text-align: center;
`

const Logo = styled.h1`
	font-weight: 400;
`

const Right = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`

const MenuItem = styled.div`
	font-size: 14px;
	cursor: pointer;
	margin-left: 25px;
	
	&:hover{
    color: #54626F;
		font-weight: bold;
		transform: scale(1.1);
  }
`

const Header = () => {
  const {
    state: { cart },
    dispatch,
    productDispatch,
  } = CartState();

  return (
		<Container>
        <Wrapper>
					<Left>
						<Link to="/" style={{"textDecoration": "none", "color": "black"}}>
							<MenuItem>HOME</MenuItem>
						</Link>
						<Link to="/stock" style={{"textDecoration": "none", "color": "black"}}>
							<MenuItem>ESTOQUE</MenuItem>
						</Link>
						<Link to="/contact" style={{"textDecoration": "none", "color": "black"}}>
							<MenuItem>CONTATO</MenuItem>
						</Link>
					</Left>
					<Center><Logo>Israel's Store</Logo> </Center>
					<Right>
						<Link to="/register" style={{"textDecoration": "none", "color": "black"}}>
							<MenuItem>CADASTRAR</MenuItem>
						</Link>
						<Link to="/login" style={{"textDecoration": "none", "color": "black"}}>
							<MenuItem>LOGIN</MenuItem>
						</Link>
						<Link to="/cart" style={{"textDecoration": "none", "color": "black"}}>
							<MenuItem>
								<Badge badgeContent={cart.length} color="primary">
									<ShoppingCartOutlined/>
								</Badge>
							</MenuItem>
						</Link>
					</Right>
				</Wrapper>
			</Container>
  );
};

export default Header;

        // <Navbar.Brand>
        //   <Link to="/">Shopping Cart</Link>
        // </Navbar.Brand>
				// <Link to="/cart">
				// 	<div>
        //     <Dropdown.Toggle variant="success">
        //       <FaShoppingCart color="white" fontSize="25px" />
        //       <Badge>{cart.length}</Badge>
        //     </Dropdown.Toggle>
        // </div>
				// </Link>