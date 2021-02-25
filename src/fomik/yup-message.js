import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

export default function YupMessage() {

    const SignupSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Too Short!')
            .max(70, 'Too Long!')
            .required('Required'),
        email: Yup.string()
            .email('Invalid email dcsdv')
            .required('Required'),
    });

    return (
        <div>
            <h1>Signup</h1>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                }}
                validationSchema={SignupSchema}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({isSubmitting}) =>  (
                    <Form>

                        <Field type="text" name="name"/>
                        <ErrorMessage name="name" component="div"/><br/>

                        <Field type="email" name="email"/>
                        <ErrorMessage name="email" component="div"/>

                        <button type="submit"  disabled={isSubmitting}>Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
