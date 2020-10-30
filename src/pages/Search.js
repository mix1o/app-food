import React, { useState } from "react"
import Footer from "../components/page/Footer";
import Header from "../components/page/Header";
import SearchFood from "../components/SearchFood";

const Search = () => {

    const [food,setFood] = useState([]);

    return (
        <>
        <div className="search-recipe">
        <Header/>
            <div className="box-search-recipe">
            <h3 className="heading-3">Search recipe</h3>
            </div>
            <SearchFood/>
            <Footer/>
        </div>
        
      
        </>
    )
}

export default Search;