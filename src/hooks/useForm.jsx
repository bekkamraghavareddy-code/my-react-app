import { useState } from "react";

export default function useForm(initial = {}) {
  const [values, setValues] = useState(initial);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev)=>({...prev,[name]:value}));
   // setValues({...values,[name]:value})
  };

  const reset = () => setValues(initial);

  return { values, handleChange, reset };
}
