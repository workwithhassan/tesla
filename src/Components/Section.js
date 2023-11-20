import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

function Section({ title, description, leftButton, rightButton, backgroundImage }) {
    return (
        <Wrap bgImage={backgroundImage}>
            <Fade bottom>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </ItemText>
            </Fade>
            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            {leftButton}
                        </LeftButton>
                        {
                            rightButton &&
                            <RightButton>
                                {rightButton}
                            </RightButton>
                        }
                    </ButtonGroup>
                </Fade>
                <DownArrow src="/images/down-arrow.svg" />
            </Buttons>
        </Wrap>
    )
}

const Wrap = styled.div`
    height: 100vh;
    width: 100vw;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-image: ${props => `url("/images/${props.bgImage}")`}
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`

const ButtonGroup = styled.div`
display: flex;
justify-content: center;
margin-bottom: 50px;
@media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
}
`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    margin: 10px;
    opacity: 0.85;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 12px;
`

const RightButton = styled(LeftButton)`
    background-color: white;
    opacity: 0.65;
    color: black;
`
const DownArrow = styled.div`
margin-top: 20px;
height: 40px;
`

const Buttons = styled.div``

export default Section
