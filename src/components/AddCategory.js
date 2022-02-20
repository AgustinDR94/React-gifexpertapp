import React, {useState} from "react";
import PropTypes from "prop-types";

const AddCategory = ({setCategories}) => {

    const [inputValue, SetInputValue] = useState("");

    const handledInputChange = (e) => {
        SetInputValue(e.target.value);
    }

    const handledSubmit = (e) => {
        e.preventDefault();


        if(inputValue.trim().length > 2) {
            setCategories(cat => [inputValue, ...cat]);
            SetInputValue("");
        }
    }

    return (
        <>
        <form onSubmit={handledSubmit}>
            <input
                type="text"
                value={ inputValue }
                onChange={ handledInputChange }
            />
        </form>
        </>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;