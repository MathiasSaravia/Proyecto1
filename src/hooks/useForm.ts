import { ChangeEvent, useState } from "react"

export const useForm = <T> (initialState: T) => {


    const [FormValues, setFormValues] = useState(initialState)

    const handleChange = ({target} : ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...FormValues,
            [target.name] : target.value
        })

    };

    const reset = () => {setFormValues(initialState)}


  return {
    FormValues,
    handleChange,
    reset
  }
}
