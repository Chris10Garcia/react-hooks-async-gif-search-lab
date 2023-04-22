import React, { useEffect, useState } from "react";
import { APIKEY } from "./apiKey";
import GifSearch from "./GifSearch";
import GifList from "./GifList";

const jsonAPI = 'https://api.giphy.com/v1/gifs/search?q='


function GifListContainer(){

    const [gifList, setGifList] = useState([])
    const [query, setQuery] = useState("")


    useEffect( () => {
        fetch(jsonAPI + query + APIKEY)
        .then( r => r.json() )
        .then( d => {
            // setGifList(d)
            // console.log( jsonAPI + "dolphin" + APIKEY )
            setGifList([d.data[0].images.original.url, d.data[1].images.original.url, d.data[2].images.original.url])
        })
    }, [query])

    function submitSearch(value){
        setQuery(value)
    }

    return(
        <div>
            <GifSearch submitSearch = {submitSearch} />
            <GifList gifList = {gifList} />
        </div>
    )
}


export default GifListContainer