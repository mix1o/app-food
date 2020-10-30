import React, { useState } from "react"
import Dish from "../Dish";



const Gallery = () => {

    const [count,setCount] = useState(0);

    return (
        <div className="gallery" id="gallery">
            <h3 className="heading-3">Gallery</h3>
   
                <Dish setCount={setCount} count={count}/>
          
        </div>
    )

}

export default Gallery;