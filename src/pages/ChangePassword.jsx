import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Input from "../components/Input";


export default function ChangePassword(){
    const schema = Yup.object({
         currentpassword: Yup.string().min(6).required("Current Password is required"),
 
    password: Yup.string().min(6).required("Password is required"),
      confirmpassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords do not match")
    .required("Confirm password is required"),
  });
return <div>
    <Formik 
    initialValues={{currentpassword:"",password:"",currentpassword:""}}
    validationSchema={schema}
    onSubmit={(values)=>{
        console.log(values);
    }}
    >
        <Form className="p-4 space-y-4">
        <div>
          <Field name="currentpassword" placeholder="current password" className="border p-2" />
          <ErrorMessage name="currentpassword" component="p" className="text-red-500" />
        </div>
        <div>
          <Field name="password" placeholder="new password" className="border p-2" />
          <ErrorMessage name="password" component="p" className="text-red-500" />
        </div>
        <div>
          <Field name="confirmpassword" placeholder="Confirm password" className="border p-2" />
          <ErrorMessage name="confirmpassword" component="p" className="text-red-500" />
        </div>
        </Form>


      
    </Formik>
</div> 
}