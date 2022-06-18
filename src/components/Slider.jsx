import styled from 'styled-components'
import { ArrowLeftOutlined, ArrowRightOutlined} from '@material-ui/icons';
import { useState } from 'react';
import { sliderItems } from '../data/data';

const Container = styled.div`
	width: 100%;
  height: 80.2vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
	width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "20px"};
  right: ${(props) => props.direction === "right" && "20px"};
  margin: auto;
  cursor: pointer;
  z-index: 2;
	
	&:hover {
		box-shadow: 1px 1px #D3D3D3;
	}
`;

const Wrapper = styled.div`
	height: 100%;
	display: flex;
	transition: all 1.5s ease;
	transform: translateX(${props=> props.slideIndex * -100}vw);
`;

const Slide = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	background-color: #${(props) => props.bg};
`;

const ImageContainer = styled.div`
	height: 100%;
  flex: 1;
`;

const Image = styled.img`
	height: 80%;
`;

const InfoContainer = styled.div`
	flex: 1;
  padding: 50px;	
	margin-bottom: 200px;
`;

const Title = styled.h1`
	font-size: 70px;
	font-weight: 400;
`;

const Description = styled.p`
	margin: 50px 0px;
	font-size: 20px;
	font-weight: 300;
	letter-spacing: 3px;
`;

const Button = styled.button`
	padding: 10px;
	font-size: 20px;
	background-color: transparent;	
	cursor: pointer;
	border: 1px solid black;
	color: black;

	&:hover {
		box-shadow: 2px 2px #888888;
	}
`;

const Slider = () => {
	const [slideIndex, setSlideIndex] = useState(0);
	const handleClick = (direction) => {
		if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
	}
	
	return (
		<Container>
			<Arrow direction="left" onClick={() => handleClick("left")}>
				<ArrowLeftOutlined/>
			</Arrow>
			<Wrapper slideIndex={slideIndex}>
				{	
					sliderItems.map(
						item=> (
							<Slide bg={item.bg} key={item.id}>
								<ImageContainer>
									<Image src={item.img} />
								</ImageContainer>
								<InfoContainer>
									<Title>{item.title}</Title>
									<Description>{item.desc}</Description>
									<Button>Ver agora</Button>
								</InfoContainer>
							</Slide>
						)
					)
				}
			</Wrapper>
			<Arrow direction="right" onClick={() => handleClick("right")}>
				<ArrowRightOutlined/>
			</Arrow>
		</Container>
	)
}

export default Slider