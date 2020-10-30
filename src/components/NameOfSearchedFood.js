import React from "react"


const NameOfSearcheFood = ({name,count}) => {
    return (
        <div>
            <h2 className="heading-2">Name of food: <span>{name}</span></h2>
            <p className="p-searched">Number of view: <span>{count}</span></p>
        </div>
    )
}

export default NameOfSearcheFood;