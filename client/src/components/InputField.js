import React from 'react';
import { Button, Row, Col } from 'react-materialize';

const InputField = ({ userInput, label, type, name, id, placeholder, onChange, handleFormSubmit }) => {


    const handleChange = (event) => {
        const { userInput } = event.target;
        // onChange(userInput);
    }

    return (
        <>
        <form inline='true' onSubmit={handleFormSubmit}></form>
            {label && <label>{label}</label>}
            <input
                type={type}
                name={name}
                id={id}
                placeholder={placeholder}
                value={userInput}
                onChange={handleChange}
            />
             <button onClick={handleFormSubmit}>Search</button>
        </>
    )
}

export default InputField;


