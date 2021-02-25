import {login, register} from "../../../shared/services/authen.service";
import {toast} from "react-toastify";
import {setStorage} from "../../../shared/LocalStorageApp";
import {Formik} from "formik";
import React from "react";

export default function Register() {

    const initValue = {
        fullname: '',
        username: '',
        password: '',
        email: '',
        type: 1
    }
    const validates = (values) => {
        const error = {};

        if (values.fullname || values.fullname == null) {
            error.fullname = "Field required";
        }

        if (values.username || values.username == null) {
            error.username = "Field required";
        } else if (values.username.length < 5) {
            error.username = "Username invalid";
        }

        if (values.password || values.password == null) {
            error.password = "Field required";
        } else if (values.password.length < 3) {
            error.password = "Password invalid";
        }

        if (values.email || values.email == null) {
            error.email = "Field required";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            error.password = "Password invalid";
        }

    }

    const onSubmit = (values, {setSubmitting}) => {

        const data = {
            fullname: values.fullname,
            email: values.email,
            username: values.username,
            password: values.password,
            type: 1
        };

        register(data)
            .then(result => {
                if (result.data.code == 200) {
                    toast.success("Đăng kí thành công");
                    setTimeout(()=>{
                        window.location.href = "/";
                    },3000)
                } else {
                    toast.success(result.data.message);
                }
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    return (
        <div style={{
            width: 600,
            position: "absolute",
            marginLeft: 350,
            marginTop: 100}}>

            <Formik initialValues={initValue}
                    validate={validates}
                    onSubmit={onSubmit}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                  }) => (
                    <form onSubmit={handleSubmit}>
                        <h3>Register</h3>

                        <div className="form-group">
                            <label>Full name</label>
                            <input className="form-control" placeholder="Enter full name" name="fullname"
                                   onBlur={handleBlur}
                                   onChange={handleChange}/>
                            {touched.fullname && errors.fullname ? errors.fullname : null}
                        </div>

                        <div className="form-group">
                            <label>User name</label>
                            <input className="form-control" placeholder="Enter username" name="username"
                                   onBlur={handleBlur}
                                   onChange={handleChange}/>
                            {touched.username && errors.username ? errors.username : null}
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input className="form-control" placeholder="Enter email" name="email"
                                   onBlur={handleBlur}
                                   onChange={handleChange}/>
                            {touched.email && errors.email ? errors.email : null}
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" name="password"
                                   onBlur={handleBlur}
                                   onChange={handleChange}/>
                            {touched.password && errors.password ? errors.password : null}
                        </div>

                        <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                        <p className="forgot-password text-right">
                            Already registered <a href="/">log in?</a>
                        </p>
                    </form>
                )}
            </Formik>
        </div>
    )
}
