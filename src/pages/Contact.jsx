import React from 'react';
import styled from 'styled-components';
import Header from "../components/Header";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";

const Container = styled.div`
	padding: 40px;
	align-items: center;
	justify-content: center;
	display: flex;
	background: url("https://garagem360.com.br/wp-content/uploads/2021/07/dd97b0fbf74d706b33c7215476c1c755.jpeg");
`;

const Title = styled.h1`
	font-size: 30px;
	font-weight: 200;
	margin-bottom: 20px;
	display: flex;
	align-items: center;
	justify-content: center;	
`;

const Wrapper = styled.div`
	width: 30%;
	height: 80%;
	padding: 20px;
	background-color: white;
	padding: 20px 30px;
	border-radius: 20px;
	align-items: center;
	justify-content: center;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
`;

const Input = styled.input`
	margin: 10px 0px;
	height: 30px;
	border: 1px solid gray;
	border-radius: 6px;
	box-shadow: 0.5px 0.5px  black;
	:focus{
		outline: none;
	}
`;

const Button = styled.button`
	margin: 30px;
	padding: 8px;
	cursor: pointer;
	background-color: white;
	border: 1px solid #54626F;
	border-radius: 26px;
	font-size: 16px; 
	box-shadow: 0.5px 0.5px black;
	
	&:hover{
		background-color: #54626F;
		color: white;
	}
`;

const TextArea = styled.textarea`
	margin: 10px 0px;
	border: 1px solid gray;
	border-radius: 6px;
	box-shadow: 0.5px 0.5px  black;
	:focus{
		outline: none;
	}
`;

const Contact = () => {
	return (
		<div>
			<Header/>
			<Announcement/>
			<Container>
				<Wrapper>
					<Title>Solicitar contato</Title>
					<Form>
						<Input placeholder="Nome completo"required/>
						<Input placeholder="E-mail" type="email" 
						name="email" 
						id="email" required/>
						<Input placeholder="Assunto" required/>
						<TextArea name="" id="" cols="30" rows="10" placeholder="Mensagem"/>
						<Button type="submit">Registrar</Button>
					</Form>
				</Wrapper>		
		 	</Container>
			<Footer/>
		</div>
	)
}

export default Contact