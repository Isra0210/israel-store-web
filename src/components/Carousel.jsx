import styled from "styled-components"
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import { useState } from 'react';

const Container = styled.div`
	width: 100%;
  height: 50vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Image = styled.img`
	height: 100%;
	width: 100%;
`;

const ImageContainer = styled.div`
	height: 100%;
  flex: 1;
`;

const Wrapper = styled.div`
	height: 100%;
	display: flex;
	transition: all 1.5s ease;
	transform: translateX(${props=> props.slideIndex * - 50}vw);
`;

const Arrow = styled.div`
	width: 40px;
  height: 40px;
  background-color: whitesmoke;
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

const Slide = styled.div`
	width: 50vw;
	height: 50vh;
	display: flex;
	align-items: center;
	background-color: #${(props) => props.bg};
`;

const Carousel = ({item}) => {
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
					item.images.map(
						item => (
							<Slide bg={item.bg} key={item.id}>
								<ImageContainer>
									<Image src={item} />
								</ImageContainer>
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

export default Carousel