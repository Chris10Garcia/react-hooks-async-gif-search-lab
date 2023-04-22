import React, { useState } from "react";



function GifSearch( {submitSearch} ) {
    const [formData, setFormData] = useState("")

    function handleOnChange(e){
        setFormData(e.target.value)
        console.log(formData)
    }

    function handleOnSubmit(e){
        e.preventDefault()
        submitSearch(formData)
    }

    return (
        <form onSubmit={handleOnSubmit} >
            <label>Enter a Search Term:</label>
            <input onChange = {handleOnChange} value = {formData} ></input>
            <button>Find Gifs</button>
        </form>
    )
}



export default GifSearch