import styled from "styled-components"
import { Link } from  "react-router-dom";
import { users } from "../data/data";
import { useState } from 'react';

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #54626F;
	background: url("https://garagem360.com.br/wp-content/uploads/2021/07/dd97b0fbf74d706b33c7215476c1c755.jpeg");
`;

const Title = styled.h1`
	font-size: 40px;
	font-weight: 200;
	margin-bottom: 20px;
	display: flex;
`;

const Wrapper = styled.div`
	width: 30%;
	height: 50%;
	padding: 20px;
	background-color: white;
	padding: 20px 30px;
	box-shadow: 1px 1px 1px 2px black;
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
	font-size: 18px;
	:focus{
		outline: none;
	}
`;

const Button = styled.button`
	margin: 10px;
	padding: 8px;	
	cursor: pointer;
	background-color: #${props => props.color};
	color: ${props => props.type === "register" && "white"};
	border: 1px solid #54626F;
	border-radius: 26px;
	font-size: 16px; 
	box-shadow: 0.5px 0.5px black;
	width: 50%;
`;

const ButtonContainer = styled.div`
	display: flex;
	margin-top: 10px;
	align-items: center;
	justify-content: center;
`;

const LinkRecoverPassword = styled.a`
	cursor: pointer; 
	display: flex;
	margin: 15px 10px;
	font-size: 12px;
	font-weight: 200;
`;	

const Submit = styled.input`
	color: white;
	margin: 10px;
	padding: 8px;
	cursor: pointer;
	background-color: #${props => props.color};
	color: ${props => props.type === "register" && "white"};
	border: 1px solid #54626F;
	border-radius: 26px;
	font-size: 16px; 
	box-shadow: 0.5px 0.5px black;
	width: 50%;
`;

const Error = styled.div`
	color: red;
	font-size: 14px;
	margin-top: 10px;
`;

const Login = () => {
	const [user, setUser] = useState({email: "", password: ""});
	const [error, setError] = useState("");
	const [details, setDetails] = useState({email: "", password: ""}); 
	
	const SubmitLogin = () => {
		if(users.find((user) => user.email === details.email && user.password === details.password)){	
			setUser({
				email: details.email,
			});
			
			setError("");
		} else {
			setError("Usuário e/ou senha incorreto");
		}
	}
	
	const logout = () => {
		setUser({email: "", password: ""});
	}
	
	const submitHandler = (e) => {
		e.preventDefault(); 
		SubmitLogin();
	}
		
	return (
		<Container>
			<Wrapper>
				<Title>LOGIN</Title>
				<Form onSubmit={submitHandler}>
					<Input 
						type="email" 
						name="email" 
						id="email" 
						placeholder="Login"
						required
						onChange={e => setDetails({...details, email: e.target.value})}
						value={details.email}
					/>
					<Input 
						type="password" 
						name="password" 
						id="password" 
						required
						placeholder="Senha"
						onChange={e => setDetails({...details, password: e.target.value})}
						value={details.password}
					/>
					<Error>{error}</Error>
					<ButtonContainer>
						<Button type="register" color="fff">
							<Link to="/register" style={{"textDecoration": "none", "color": "black"}}>
								Registrar
							</Link>
						</Button>
						<Button type="submit" color="fff">
							<Link to={`/${details.email}`} style={{"textDecoration": "none", "color": "black"}}>
								Entrar
							</Link>
						</Button>
					</ButtonContainer>
				</Form>
				<LinkRecoverPassword>Esqueci a senha</LinkRecoverPassword>
			</Wrapper>			
		</Container>
	)
}

export default Login