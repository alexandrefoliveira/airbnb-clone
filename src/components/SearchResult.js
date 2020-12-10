import { FavoriteBorder } from "@material-ui/icons";
import React from "react";
import SearchPage from "./SearchPage";
import "./SearchResult.css"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";

// Using props on the SearchResult, all values are on the SearchPage.js
function SearchResult({
    img, 
    location,
    title, 
    description,
    star,
    price, 
    total
}){
    return(
        <div className="searchResult">
           <img src={img} alt="" />
           <FavoriteBorderIcon className="searchResult__heart" />
           
           <div className="searchResult__info">
                <div className="searchResult__infoTop">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>________</p>
                    <p>{description}</p>

                </div>
                <div className="searchResult__infoBottom">
                    <div className="searchResult__stars">
                    <StarIcon className="searchResult__star"/>
                    <p >
                        <strong>
                            {star}
                        </strong>
                    </p>
                </div>
                    </div>
                 
                <div className="searchResult__price">
                    <h2>{price}</h2>
                    <p>{total}</p>
                </div>
           </div>
        </div>
    )
}

export default SearchResult;

