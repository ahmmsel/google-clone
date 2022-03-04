import { useState } from "react"

function useForm(initialValues, callback) {
  // state
  const [values, setValues] = useState(initialValues)
  // handler
  const inputChangeHandler = (event) => {
    const { name, value } = event.target
    setValues(prevValues => ({
      ...prevValues,
      [name]: value
    }))
  }

  const submitHandler = (event) => {
    event.preventDefault()
    callback()
  }
  // returned
  return {
    values,
    setValues,
    inputChangeHandler,
    submitHandler
  }
}

export default useForm