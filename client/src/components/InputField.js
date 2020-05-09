import React from 'react';

const InputField = ({ input, label, type, placeholder, onChange, handleFormSubmit, handleInputChange }) => {


    const handleChange = (event) => {
        const { input } = event.target;
        onChange(input);
    }

    return (
        <>
        <form inline='true' onSubmit={handleFormSubmit}></form>
            {label && <label>{label}</label>}
            <input
                type={type}
                input={input}
                placeholder={placeholder}
                onChange={handleInputChange}
            />
             <button onClick={handleFormSubmit}>Search</button>
        </>
    )
}

export default InputField;


