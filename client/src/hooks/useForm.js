import { useState } from "react";

function useForm(submitHandler, initialValues) {
    const [values, setValues] = useState(initialValues)

    const onChange = (e) => {
        setValues((currentValues) => ({
            ...currentValues,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        submitHandler(values)
    }

    return [
        values,
        onChange,
        onSubmit
    ]
}

export default useForm;


// Initial Values:
// {
//     email: '',
//     password: '',
//     confirmPassword: '',
//     username: ''
// }