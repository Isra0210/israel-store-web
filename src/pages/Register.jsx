import styled from "styled-components"
import { v4 as uuid } from 'uuid';
import { useEffect, useState } from 'react';
import toast from 'react-simple-toasts';
import validator from 'validator';
import { cpf } from 'cpf-cnpj-validator'; 

const Container = styled.div`
	align-content: center;
	justify-content: center;
	width: 99vw;
	height: 100vh;
	display: flex;
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
	width: 40%;
	padding: 20px;
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
	margin-top: 20px;
`;

const Button = styled.button`
	padding: 8px;
	margin-top: 30px;
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

const Div = styled.div`
	height: 80%;
	width: 70%;
	display: flex;
	align-items: start;
	margin: 30px;
	justify-content: space-between;
	background-color: white;
	box-shadow: 1px 1px 1px 2px black;
	border-radius: 20px;
`;

const ErrorMessage = styled.div`
	font-size: 16px;
	color: red;
	display: flex;
	font-weight: 400;
`;

const Register = () => {
	const [error, setError] = useState("");
	const [name, setName] = useState("");
	const [userCpf, setUserCpf] = useState("");
	const [email, setEmail] = useState("");
	const [birthDate, setBirthDate] = useState("");
	const [password, setPassword] = useState("");
	const [cep, setCep] = useState("");
	const [street, setStreet] = useState("");
	const [auxStreet, setAuxStreet] = useState("");
	const [neighborhood, setNeighborhood] = useState("");
	const [auxNeighborhood, setAuxNeighborhood] = useState("");
	const [city, setCity] = useState("");
	const [uf, setUf] = useState("");
	const [auxUf, setAuxUf] = useState("");
	const [number, setNumber] = useState("");
	
	const fieldMandatory = "Campo obrigatório!";
	const fieldMinFiveChar = "Campo precisa de pelo menos 5 caracter!";
	
	const validateFields = () => {
		return name.length !== 0 && cpf.length !== 0 
					&& email.length !== 0 && birthDate.length !== 0
					&& password.length !== 0 && cep.length !== 0;
	}
	
	const validateField = (e) => {
		var field = e.target.value;

		if(field.length === 0){
			setError(fieldMandatory);
		} else if(field.length < 6){
			setError(fieldMinFiveChar);
		} else {
			setError("");
		}
	}
	
	const validatePassword = (e) => {
		var pass = e.target.value;

		if(pass.length === 0){
			setError(fieldMandatory);
		} else if(pass.length < 8){
			setError("Senha precisa de no mínimo 8 caracter!");
		} else {
			setError("");
		}
	}
	
	const validateBirthDate = (e) => {
		var date = e.target.value;
		date=date.split("/");
		var bday_in_milliseconds = new Date(parseInt(date[2], 10), parseInt(date[1], 10) - 1 , parseInt(date[0]), 10).getTime();
		var now = new Date().getTime(); 
		
		if (birthDate === "" || birthDate.length === 0){
			setError(fieldMandatory);
		} else if(now - bday_in_milliseconds < 567648000000){ 
			setError("Você precisa ter ao menos 18 anos!");
		}
		else{
			setError("");
		}
	}
	
	const notify = () => {
		if(error.length === 0 && validateFields() && validator.isEmail(email)){
			toast('Registrado com sucesso!');
			setError("");
			setName("");
			setUserCpf("");
			setEmail("");
			setBirthDate("");
			setPassword("");
			setCep("");
			setStreet("");
			setNeighborhood("");
			setCity("");
			setUf("");
			setNumber("");
			setAuxNeighborhood("");
			setAuxStreet("");
			setAuxUf("");
			//TODO build user object after do redirect to login
		} else {
			setError("Informações inválidas!");
		}
	}
	
	const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, '');
    fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
      setCep(data.cep);
      setNeighborhood(data.bairro);
      setStreet(data.logradouro);
      setUf(data.uf);
			setCity(data.localidade);
    });
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
	
	const validateCpf = (e) => {
    var cpfParam = e.target.value;
		const isValid = cpf.isValid(cpfParam);
    if (cpfParam.length === 0) {
      setError(fieldMandatory);
    } else if(!isValid) {
			setError("CPF inválido!");
		} else {
			setError('');
		}
  }
	
	const validateAddress = (e) => {
		var field = e.target.value;

		if(field.length === 0){
			setError(fieldMandatory);
		} else {
			setError("");
		}
	}

	const submitHandler = (e) => {
		e.preventDefault(); 
	}
	
	useEffect(() => {
		if(neighborhood.length > 0){
			setAuxNeighborhood(neighborhood);
		}
		if(street.length > 0){
			setAuxStreet(street);
		}
		if(uf.length > 0){
			setAuxUf(uf);
		}
	});
	
	return (
		<Container>
			<Div>
				<Wrapper>
					<Title>Cadastro</Title>
					<Form onSubmit={submitHandler}>
						<Input placeholder="Nome completo" 
							required
							name="name" 
							id="name" 
							value={name}
							onChange={(e) => {
								setName(e.target.value);
								validateField(e);
							}}
						/>
						<Input placeholder="CPF" 
							required
							type="text"
							name="text" 
							id="text"
							pattern="[0-9]"
							mask="000.000.000-00"
							value={userCpf.replace(/\D/,'')}
							onChange= {(e) => {
								setUserCpf(e.target.value);
									validateCpf(e);
								}
							}
						/>
						<Input placeholder="E-mail" 
							required
							type="email" 
							name="email" 
							id="email" 
							value={email}
							onChange={(e) => {
								setEmail(e.target.value);
								validateEmail(e);
							}}
						/>
						<Input placeholder="Data de nascimento [dd/mm/yyyy]" 
							required
							name="birthDate" 
							id="birthDate" 
							value={birthDate.replace(/[a-zA-Z\u00C0-\u00FF ]+/i,'')}
							onChange={(e) => {
								setBirthDate(e.target.value);
								validateBirthDate(e);
							}}
						/>
						<Input placeholder="Senha" 
							required
							type="password" 
							name="password" 
							id="password" 
							value={password}
							onChange={(e) => {
								setPassword(e.target.value);
								validatePassword(e);
							}}
						/>
						<Agreement>
							Ao criar a conta estará aceitando nossa <b>Politica de Privacidade </b>
							e <b>Termos de uso</b>
						</Agreement>
						<ErrorMessage>{error}</ErrorMessage>
					</Form>
				</Wrapper>			
				<Wrapper>
					<Title>Endereço</Title>
					<Form onSubmit={submitHandler}>
						<Input placeholder="CEP" 
							required
							name="cep" 
							id="cep" 
							onBlur={checkCEP}
							{...cep}	
							value={cep.replace(/\D/,'')}
							onChange={(e) => {
								setCep(e.target.value);
								validateAddress(e);
							}}
						/>
						<Input placeholder="Rua" 
							required
							disabled={street.length > 0}
							name="street" 
							id="street"
							{...street} 
							value={auxStreet}
							onChange={(e) => {
								setAuxStreet(e.target.value);
								validateAddress(e);
							}}
						/>
						<Input placeholder="Bairro" 
							required
							disabled={neighborhood.length > 0}
							name="neighborhood" 
							id="neighborhood" 
							{...neighborhood}
							value={auxNeighborhood}
							onChange={(e) => {
								setAuxNeighborhood(e.target.value);
								validateAddress(e);
							}}
						/>
						<Input placeholder="Cidade" 
							required
							disabled={city.length !== 0}
							name="city" 
							id="city" 
							value={city}
							onChange={(e) => {
								setCity(e.target.value);
								validateAddress(e);
							}}
						/>
						<Input placeholder="UF"
							required
							disabled={uf.length > 0}
							name="uf" 
							id="uf" 
							{...uf}
							value={auxUf}
							onChange={(e) => {
								setAuxUf(e.target.value);
								validateAddress(e);
							}}
						/>
						<Input placeholder="Número"
							required
							name="number" 
							id="number" 
							value={number}
							onChange={(e) => {
								setNumber(e.target.value);
								validateAddress(e);
							}}
						/>
						<Button onClick={notify} type="submit">Registrar</Button>
					</Form>
				</Wrapper>
			</Div>
		</Container>
	)
}

export default Register