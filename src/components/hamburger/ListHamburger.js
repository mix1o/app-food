import React from "react"
import styled from "styled-components"
import LiHamburger from "./LiHamburger";
const Ul = styled.ul`
position: fixed;
top: 0;
right: 0;
width: 80%;
height: 100vh;
z-index: 2;
background-color: #0d2538;
transform: ${({open}) => open ? 'translateX(0)' : 'translateX(110%)'};
transition: transform .3s ease-in-out;
list-style: none;
text-align: left;
padding: 20px;
`;


const ListHamburger = ({open,setOpen}) => {
    return (
        <Ul className="list-ham" onClick={() => setOpen(!open)} open={open}>
           <LiHamburger/>
        </Ul>
    )
}

export default ListHamburger;