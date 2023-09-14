import React, { useState } from 'react'

const useForm = (initialvalue,validationCallback) => {
    const [formdata,setFormdata] = useState(initialvalue)
    function HandleChange(name,value){
        setFormdata({...formdata,[name]:value})
    }
    function HandleSubmit(){
        validationCallback(formdata)
    }
//usestate for form data 
// creating a function for onchange using name and value attributes for form data
// handlesubmit 
  return {formdata,HandleChange,HandleSubmit}
}

export default useForm
