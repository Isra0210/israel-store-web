import styled from "styled-components"
import { Facebook, Instagram, Mail, Phone, Room } from "@material-ui/icons";
import { Link } from  "react-router-dom";

const Container = styled.div`
	display: flex;
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 20px;
`;

const Logo = styled.h1`
	font-size: 20px;
	font-weight: 600;
`;

const Description = styled.p`
	font-size: 14px;
	font-weight: 400;
	margin: 20px 0px;
`;

const Right = styled.div`
	flex: 1;
	padding: 20px;
`;

const ContactItem = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 20px;
`;

const Payment = styled.img`
	width: 50%;
`;

const Center = styled.div`
	flex: 1;
	padding: 20px;
`;

const Title = styled.h3`
	font-size: 20px;
	font-weight: 600;
	margin-bottom: 30px;
`;

const List = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	flex-wrap: wrap;
`;

const ListItem = styled.li`
	width: 100%;
	margin-bottom: 10px;
	cursor: pointer;
	&:hover{
    color: #54626F;
		font-weight: bold;
  }
`;

const SocialContainer = styled.div`
	display: flex;
	padding: 20px;
`;

const SocialIcon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	color: white;
	background-color: #${props=>props.color};
	align-items: center;
	justify-content: center;
	display: flex;
	margin: 10px;
	cursor: pointer;
`;

const AllRights = styled.div`
	height: 30px;
	background-color: black;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 14px;
	font-weight: 500;
`

const Footer = () => {
	return (
		<div>
			<Container>
				<Left>
					<Logo>
						Israel's Store
					</Logo>
					<Description>
						Somos a maior revenda de veículos do país, enviamos para todos estados, e temos as melhores taxas do mercado!
					</Description>
					<SocialContainer>
						<SocialIcon color="3B5999">
							<Facebook/>
						</SocialIcon>
						<SocialIcon color="E4405F">
							<Instagram/>
						</SocialIcon>
					</SocialContainer>
					<AllRights>
						© Todos direitos reservados Israel's Store
					</AllRights>
				</Left>
				<Center>
					<Title>Links úteis</Title>
					<List>
						<ListItem>
							<Link to="/" style={{"textDecoration": "none", "color": "black"}}>
								Home
							</Link>
						</ListItem>
						<ListItem>
							<Link to="/stock" style={{"textDecoration": "none", "color": "black"}}>
									Estoque
							</Link>
						</ListItem>
						<ListItem>
							<Link to="/contact" style={{"textDecoration": "none", "color": "black"}}>
								Contato
							</Link>
						</ListItem>
						<ListItem>
							<Link to="/cart" style={{"textDecoration": "none", "color": "black"}}>
								Carrinho
							</Link>
						</ListItem>
					</List>
				</Center>
				<Right>
					<Title>Contato</Title>
					<ContactItem>
						<Room style={{marginRight: "10px"}}/>
						Rua Manoel Ferreira Pinto, 258, Centro, Ponta Grossa
					</ContactItem>
					<ContactItem>
						<Phone style={{marginRight: "10px"}}/>
						(41) 99827-3125
					</ContactItem>
					<ContactItem>
						<Mail style={{marginRight: "10px"}}/>
						contato@israelstore.com
					</ContactItem>
					<Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
				</Right>
			</Container>
			
		</div>
	)
}

export default Footer