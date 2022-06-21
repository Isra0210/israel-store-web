import React from 'react';
import styled from 'styled-components';
import Header from "../components/Header";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { useState } from 'react';
import validator from 'validator';
import toast from 'react-simple-toasts';

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

const ErrorMessage = styled.div`
	font-size: 16px;
	color: red;
	display: flex;
	font-weight: 400;
`;

const Contact = () => {
	const [error, setError] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");
	
	const fieldMandatory = "Campo obrigatório!";
	const fieldMinFiveChar = "Campo precisa de pelo menos 5 caracter!";
	
	const validateFields = () => {
		return name.length !== 0 && email.length !== 0 
					&& subject.length !== 0 && message.length !== 0
	}
	
	const validateEmail = (e) => {
    var email = e.target.value
  
    if (email.length === 0) {
      setError(fieldMandatory);
    } 
		if(!validator.isEmail(email)){
      setError('Enter valid Email!');
    }else {
			setError('');
		}
  }
	
	const validateField = (e) => {
		var field = e.target.value

		if(field.length === 0){
			setError(fieldMandatory);
		} else if(field.length < 6){
			setError(fieldMinFiveChar);
		} else {
			setError("");
		}
	}
	
	const notify = () => {
		if(error.length === 0 && validateFields() && validator.isEmail(email)){
			toast('Contato enviado com sucesso!');
			setEmail("");
			setName("");
			setMessage("");
			setSubject("");
		} else {
			setError("Informações inválidas!");
		}
	}
	
	const submitHandler = (e) => {
		e.preventDefault(); 
	}
	
	return (
		<div>
			<Header/>
			<Announcement/>
			<Container>
				<Wrapper>
					<Title>Solicitar contato</Title>
					<Form onSubmit={submitHandler}>
						<Input placeholder="Nome completo"
							name="name" 
							id="name" 
							value={name}
							onChange={(e) => {
								setName(e.target.value);
								validateField(e);
							}}
						/>
						<Input
							type="email" 
							name="email" 
							id="email" 
							placeholder="Seu melhor email"
							value={email}
							onChange={(e) => {
								setEmail(e.target.value);
								validateEmail(e);
							}}
						/>
						<Input placeholder="Assunto" 
							name="subject" 
							id="subject" 
							value={subject}
							onChange={(e) => {
								setSubject(e.target.value);
								validateField(e);
							}}
						/>
						<TextArea 
							name="message" 
							id="message" 
							cols="30"
							rows="10" 
							placeholder="Mensagem"
							value={message}
							onChange={(e) => {
								setMessage(e.target.value);
								validateField(e);
							}}
						/>
						<ErrorMessage>{error}</ErrorMessage>
						<Button type="submit" onClick={notify}>Registrar</Button>
					</Form>
				</Wrapper>		
		 	</Container>
			<Footer/>
		</div>
	)
}

export default Contact