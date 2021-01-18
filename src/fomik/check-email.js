import React from "react";
import {Formik} from "formik";

 const Basic = () => (
    <div>
        <h1>Anywhere</h1>
        <Formik
            initialValues={{
                email: '',
                password: ''
            }}
            validate={values => {
                const error = {};
                if (!values.email) {
                    error.email("Required");
                }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
                    error.email("Invalid email");
                }
                return error;
            }}
            onSubmit={(values, {setSubmitting}) => {
                setTimeout(()=>{
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400)
            }}
            >
            {({
                values,
                error,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,

            })=>(
                <form onSubmit={handleSubmit}>
                    <input type="email"
                           name="email"
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.email}
                    />
                    {error.email && touched.email && error.email}
                    <input type="password"
                           name="password"
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.password}
                    />
                    {error.password && touched.password && error.password}
                    <button type="submit" disabled={isSubmitting}>Submit</button>
                </form>
            )}

        </Formik>
    </div>
)
export default Basic;
