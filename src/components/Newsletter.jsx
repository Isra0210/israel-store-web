import styled from "styled-components"
import { Send } from "@material-ui/icons";
import { useState } from 'react';
import validator from 'validator';
import toast from 'react-simple-toasts';

const Container = styled.div`
	height: 60vh;
	background-color: #e2e2e2;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

const Title = styled.h1`
	font-weight: 400;
	font-size: 70px;
	margin-bottom: 20px;
`;

const Description = styled.div`
	font-size: 24px;
	font-weight: 300;
	margin-bottom: 20px;
`;

const InputContainer = styled.div`
	width: 40%;
	height: 40px;
	background-color: white;
	display: flex;
	justify-content: space-between;
	border: 1px solid lightgray;
	border-radius: 50px;
	box-shadow: 1px 1px  #808080;
`;

const Input = styled.input`
	border: none;
	flex: 1;
	padding-left: 20px;
	border-radius: 50px;
	:focus{
		border: none;
		outline: none;
	}
`;

const Button = styled.button`
	border: none;
	background-color: white;
	color: teal;
	border-top-right-radius: 100px;
	border-end-end-radius: 100px;
	margin-left: 30px;
	margin-right: 15px;
	cursor: pointer;
`;

const ErrorMessage = styled.span`
	padding-top: 10px;
	display: flex;
	align-items: start;
	justify-content: start;
	color: red;
	font-weight: 400;
`;

const Form = styled.form`
	display: flex;
	justify-content: space-between;
	width: 50%;
	height: 40px;
	flex: 1;	
	justify-content: space-between;
`;

const Newsletter = () => {
	const [emailError, setEmailError] = useState('');
	const [email, setEmail] = useState('');
	
  const validateEmail = (e) => {
    var email = e.target.value
  
    if (validator.isEmail(email) || email.length === 0) {
      setEmailError('');
    } else {
      setEmailError('Enter valid Email!');
    }
  }
	
	const submitHandler = (e) => {
		e.preventDefault(); 
	}
	
	const notify = () => {
		toast('Enviado com sucesso!');
		setEmail("");
	}
	
	return (
		<Container>
		<Title>Inscreva-se</Title>
		<Description>Para novidades, promoções e muito mais!</Description> 
		<InputContainer>
			<Form onSubmit={submitHandler}>
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
				<Button onClick={notify} type="submit">
					<Send/>
				</Button>
			</Form>
		</InputContainer> 
		<ErrorMessage>{emailError}</ErrorMessage>
		</Container>
	)
}

export default Newsletter