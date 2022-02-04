import { useState } from "react";

const useValidation = (inputValid) =>{
    const [input, setInput] = useState('');
    const [inputTouched, setInputTouched] = useState(false);

    const isValid = inputValid(input);
    const error = !isValid && inputTouched;

    const handleChange = (event) =>{
        setInput(event.target.value);
        setInputTouched(true);
    };

    const handleBlur = () =>{
        setInputTouched(true);
    };

    const reset = () =>{
        setInput('');
        setInputTouched(false);
    };

    return{
        value: input,
        error,
        isValid,
        handleBlur,
        handleChange,
        reset
    };
};

export default useValidation;