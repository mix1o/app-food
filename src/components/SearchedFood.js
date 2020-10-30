import React, { useState } from "react";



const SearchedFood = ({image,recipeName,ingri,calories}) => {
    let helpCalories = Math.floor(calories);
    let text = '';
    const [more,setMore] = useState(false);

    if(more) text = "Close"
    else text = "See ingredients"

    return (
        
            <div className="div-food">
               
                <img alt="foto" className="food-img" src={image}/>
                <div className="food-header">
                <p className="title-of-food">{recipeName}</p>
                <p className="calories">Calories: {`${helpCalories}`}</p>
                </div>
                {more && <ul className="list-ing">{ingri}</ul>}
                <button onClick={() => setMore(!more)} className="see-i">{`${text}`}</button>
            </div>
            
        
    )
}

export default SearchedFood;