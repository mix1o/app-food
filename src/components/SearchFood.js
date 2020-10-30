import React, { useEffect, useState } from "react"
import Loading from "./Loading";
import SearchedFood from "./SearchedFood";
import NameOfSearchedFood from "./NameOfSearchedFood"
import Ingredients from "./Ingredients"
import Error from "./Error"

const SearchFood = () => {

    const [food,setFood] = useState([]);
    const [value,setValue] = useState("");
    const [isSearched,setIsSearched] = useState(false);
    const [loading,setLoading] = useState(true)

    const searchF = () => {
        setIsSearched(true);
        setLoading(true)
        fetch(`https://api.edamam.com/search?q=${value}&app_id=8a199d46&app_key=d55ad0c1aaeec55a7a2189cd79135822`)
        .then(response => response.json())
        .then(json => {    
            setFood(json)
            setValue("");
            setLoading(false);
        })
        // .then(json => console.log(json))
    }
      
    const add = (e) => {
        if(e.keyCode === 13){
            searchF();
        }
    }

    return (
        <div className="box-search">
            <input value={value} onKeyDown={add} onChange={(e) => setValue(e.target.value)} placeholder="Enter name of dish to see recipes" className="input-search" type="text"></input>
            <button onClick={() => searchF() } className="btn-search">Search</button>
            <div className="content">
                {!isSearched && <p className="results">Here will apear results</p>}
                {!loading && food.hits.length <= 0 && <Error/>}
                 {loading && isSearched &&<Loading/>}
                {!loading && food.hits.length > 0 && <NameOfSearchedFood name={food.q} count={food.count}/>} 

    {!loading && food.hits.map((sFood,index) => <SearchedFood key={index} ingri={sFood.recipe.ingredients.map((ing,index) =><Ingredients ing={ing.text} key={index} imgI={ing.image}/>)} calories={sFood.recipe.calories} image={sFood.recipe.image} recipeName={sFood.recipe.label}/>)}

            </div>
        </div>
    )
}

export default SearchFood;