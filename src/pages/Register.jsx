import styled from "styled-components"
import { v4 as uuid } from 'uuid';


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
	height: 80%;
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
	:focus{
		outline: none;
	}
`;
const Agreement = styled.span`
	padding: 30px 10px;
	font-size: 12px;
	font-weight: 300;
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

const Register = () => {
	const unique_id = uuid();
	return (
		<Container>
			<Wrapper>
				<Title>CADASTRO</Title>
				<Form>
					<Input placeholder="Primeiro nome"required/>
					<Input placeholder="Último nome" required/>
					<Input placeholder="E-mail" required/>
					<Input placeholder="Senha" required/>
					<Input placeholder="Confirmação de senha" required/>
					<Agreement>
						Ao criar a conta estará aceitando nossa <b>Politica de Privacidade </b>
						e <b>Termos de uso</b>
					</Agreement>
					<Button type="submit">Registrar</Button>
				</Form>
			</Wrapper>			
		</Container>
	)
}

export default Register