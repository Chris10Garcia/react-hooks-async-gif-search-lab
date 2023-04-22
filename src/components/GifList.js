import React from "react";


function GifList ( {gifList} ){
    return (
        <ul>
            {gifList.map(gif => {return (<li><img src = {gif} alt={gif} ></img></li>)})}
        </ul>
    )
}


export default GifList