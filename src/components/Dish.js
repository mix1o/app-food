import React from "react"
import { imgTab } from "./page/imgtab";

const Dish = ({count,setCount}) => {
    return (
        <div className="gallery-foto">
             <i onClick={() => {
                    setCount(count - 1)
                    if(count === 0){
                        setCount(4)
                    }
                    
                    }} className="fas fa-chevron-left"></i>
        <img className="foto" alt="foto" src={imgTab[count]}/>
        <i onClick={() => {
                    setCount(count + 1)
                    if(count === 4){
                        setCount(0)
                    }
                }} className="fas fa-chevron-right"></i>
        </div>
      
    )
}

export default Dish;