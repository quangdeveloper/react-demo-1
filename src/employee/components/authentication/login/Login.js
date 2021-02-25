import {Formik} from "formik";
import React from "react";
import {login} from "../../../shared/services/authen.service";
import {toast} from "react-toastify";
import {setStorage} from "../../../shared/LocalStorageApp";
import {Helmet} from "react-helmet";


export default function Login() {

    const initValue = {
        username: '',
        password: '',
        type: 1
    }
    const validates = (values) => {
        const error = {};

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
    }

    const onSubmit = (values, {setSubmitting}) => {

        const data = {
            username: values.username,
            password: values.password,
            type: 1
        };

        login(data)
            .then(result => {
                if (result.data.code == 200) {
                    toast.success("Đăng nhập thành công");
                    setStorage("currentUser", result.data.value);
                    window.location.href = "/home";
                } else {
                    toast.success("Tài khoản hoặc mật khẩu không chính xác");
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
            marginTop: 100
        }}>
            <Helmet>
                <title>Helmet Sea Login</title>
            </Helmet>
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
                        <h3>Log in</h3>

                        <div className="form-group">
                            <label>Email</label>
                            <input className="form-control" placeholder="Enter username" name="username"
                                   onBlur={handleBlur}
                                   onChange={handleChange}/>
                            {touched.username && errors.username ? errors.username : null}
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" name="password"
                                   onBlur={handleBlur}
                                   onChange={handleChange}/>
                            {touched.password && errors.password ? errors.password : null}
                        </div>

                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>

                        <p className="forgot-password text-right">
                            <a href="#/register" className="text-left"> Signup Now</a>
                            &emsp;
                            <a href="#" > Forgot password?</a>
                        </p>
                    </form>
                )}
            </Formik>
        </div>
    )
}
