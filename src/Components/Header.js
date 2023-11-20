import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import { useSelector } from 'react-redux';
import { selectCars } from '../features/car/carSlice';

function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const cars = useSelector(selectCars);

    return (
        <Wrap>
            <HeaderLeft>
                <a><img src="/images/logo.svg" /></a>
            </HeaderLeft>
            <HeaderCenter>
                {cars && cars.map((car, index) => (
                    <a key={index} href="#">{car}</a>
                ))}
            </HeaderCenter>
            <HeaderRight>
                <a href="#">Shop</a>
                <a href="#">Account</a>
                <CustomMenu onClick={() => setIsNavOpen(true)} />
            </HeaderRight>
            <HamburgerNav show={isNavOpen}>
                <CustomButton>
                    <button onClick={() => setIsNavOpen(false)}>X</button>
                </CustomButton>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-In</a></li>
                <li><a href="#">Test Drive</a></li>
                <li><a href="#">Cybertruck</a></li>
                <li><a href="#">Roadster</a></li>
                <li><a href="#">Semi</a></li>
                <li><a href="#">Charging</a></li>
                <li><a href="#">Powerwall</a></li>
                <li><a href="#">Commercial Energy</a></li>
                <li><a href="#">Utilities</a></li>
                <li><a href="#">Find Us</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Investor Relations</a></li>
            </HamburgerNav>

        </Wrap>
    )
}

const Wrap = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 0 20px;
    min-height: 60px;
    z-index: 1;
`

const HeaderLeft = styled.div`
    
`
const HeaderCenter = styled.div`
    display: flex;
    align-items: center;

    a {
        text-decoration: none;
        color: #000;
        font-weight: 600;
        padding: 0 10px;
    }

    @media (max-width: 768px) {
        display: none;
    }
`
const HeaderRight = styled(HeaderCenter)`
    align-items: center;
    display: flex;
    @media (max-width: 768px) {
        display: block;
    }
`

const CustomMenu = styled(MenuIcon)`
    pointer: cursor;
`

const HamburgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: white;
    width: 300px;
    padding: 15px;
    z-index: 10;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: 0.3s ease-in;
    li {
        list-style: none;
        padding 15px 0;
        border-bottom: 1px solid #808080;
    }
    a {
        text-decoration: none;
        color: black;
        font-weight: 600;   
    }
`

const CustomButton = styled.div`
    text-align: right;
    button {    
        background-color: transparent;
        border: none;
        padding: 10px;
        cursor: pointer;
        font-weight: 700;
        font-size: 22px;
    }
`



export default Header
