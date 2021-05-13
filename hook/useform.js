import React, {useState} from 'react'

export function useForm(getFreshModelObject) {

    const [values, setValues] = useState(getFreshModelObject());


    const handleInputChange = e => {
        console.log(e.target);
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const resetFormControls = () => {
        setValues(getFreshModelObject());
       
    }
    return {
        values,
        setValues,
        handleInputChange,
        resetFormControls
    }

}