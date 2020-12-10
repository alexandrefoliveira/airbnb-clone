import { Button } from "@material-ui/core";
import React from "react";
import "./SearchPage.css";
import SearchResult from "./SearchResult";

function SearchPage(){
    return(
        <div className="searchPage">
            <h1>I am the Search Page!</h1>
            <div className="searchPage__info">
                <p>62 stays ﹒ 26 August to 30 August﹒ 2 guests </p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of Place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>
            </div>
            <SearchResult 
                img="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1953&q=80"
                location="Private room in center of Toronto"
                title="Stay at this spacious Alex House"
                description="1 guest ﹒ 1 bedroom ﹒ 1 bed ﹒ 1.5 shared bathrooms ﹒ Wifi ﹒ Kitchen ﹒ Free parking ﹒ Washing machine"
                star="4.73"
                price="$100 / night"
                total="$200 total"            
            />

            <SearchResult 
                img="https://images.unsplash.com/photo-1495544515279-434b8d991640?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80"
                location="Private room in center of Toronto"
                title="Stay at this spacious Alex House"
                description="1 guest ﹒ 1 bedroom ﹒ 1 bed ﹒ 1.5 shared bathrooms ﹒ Wifi ﹒ Kitchen ﹒ Free parking ﹒ Washing machine"
                star="4.73"
                price="$100 / night"
                total="$200 total"            
            />

<SearchResult 
                img="https://images.unsplash.com/photo-1591247378418-c77f1532d2f8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                location="Private room in center of Toronto"
                title="Stay at this spacious Alex House"
                description="1 guest ﹒ 1 bedroom ﹒ 1 bed ﹒ 1.5 shared bathrooms ﹒ Wifi ﹒ Kitchen ﹒ Free parking ﹒ Washing machine"
                star="4.73"
                price="$100 / night"
                total="$200 total"            
            />
        </div>
    )
}

export default SearchPage;