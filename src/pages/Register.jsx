import { useState } from "react";
import useForm from "../hooks/useForm";
import Input from "../components/Input";

export default function Register() {

  const {values,handleChange,reset } = useForm({
    name: "",
    email: "",
    password: "",
    schoolName:"",
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", values);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-2">
        <Input lable="SchoolName" name="schoolName" value={values.schoolName} onChange={handleChange} />
      <input name="name" value={values.name} onChange={handleChange} placeholder="Name" />
      <input name="email" value={values.email} onChange={handleChange} placeholder="Email" />
      <input name="password" value={values.password} onChange={handleChange} placeholder="Password" type="password" />
      <button className="bg-blue-600 text-white px-3 py-2">Submit</button>
    </form>
  );
}
