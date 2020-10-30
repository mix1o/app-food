import React, { useState } from "react";
import styled from "styled-components"
import ListHamburger from "./ListHamburger"

const StyledBurger = styled.div`
    background: #333;
    background: rgb(26, 24, 24);
    background: #23242a;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;


const Hamburger = () => {

    const [open,setOpen] = useState(false)

    return (
        <>
        
        <StyledBurger onClick={() => setOpen(!open)}>
        <img alt="logo" className="header-foto" src="https://i.pinimg.com/originals/90/6b/94/906b94d1bed351b8d0f2f95448a0d6c0.png"/>
        {!open && <i className="fas fa-bars"></i>}
        {open && <i className="fas fa-times"></i>}
        </StyledBurger>
        <ListHamburger setOpen={setOpen} open={open}/>        
        </>
    )
}

export default Hamburger;