import React, {useState} from "react";
import {Field, Form, Formik} from "formik";
import {Col, FormLabel, Row} from "react-bootstrap";
import Pagination from "react-js-pagination";


export default function Basic() {
    const genders = [
        {
            id: 0,
            label: 'Male'
        },
        {
            id: 1,
            label: 'Female'
        }
    ]
    const [page_config, setPageConfig] = useState({
        page_index: 1,
        page_size: 10
    });

    function handleChangePage(event) {
        setPageConfig({
            page_index: event,
            ...page_config
        })
    }

    function handlePerpage(e) {
        e.preventDefault();
        setPageConfig({
            ...page_config,
            page_index: 1,
            page_size: Number(e.target.value)
        })
    }

    return (
        <div>
            <h1>Anywhere in your app!</h1>
            <Formik
                initialValues={{email: '', password: '', gender: 0}}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    if (!values.gender) {
                        errors.gender = 'Required';
                    }
                    return errors;
                }}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
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
                    <Form>

                        <FormLabel>Nhap email</FormLabel><br/>
                        <Field name="email" placeholder="email"/><br/>
                        <div style={{color: "red"}}>{errors.email || touched.email}<br/></div>

                        <FormLabel>Nhap password </FormLabel><br/>
                        <Field name="password" placeholder="password"/><br/>
                        <div style={{color: "red"}}>{errors.password || touched.password} <br/></div>

                        <FormLabel>Chon gioi tinh </FormLabel><br/>
                        <Field as="select" name="gender" placeholder="gender">
                            {
                                genders.map((gender, i) =>
                                    <option key={i} value={gender.id}>{gender.label}</option>
                                )
                            }
                        </Field><br/>
                        <div style={{color: "red"}}>{errors.password || touched.password} <br/></div>

                    </Form>
                )}
            </Formik>

            <Row>
                <Col lg={5}>
                    <Pagination
                        activePage={page_config.page_index}
                        itemsCountPerPage={page_config.page_size}
                        innerClass="pagination Pagination-left"
                        totalItemsCount={200}
                        itemClass="page-item"
                        linkClass="page-link"
                        pageRangeDisplayed={5}
                        onChange={handleChangePage}
                    />
                </Col>
                <Col lg={7}>
                    <label className="style_display">Hiển thị &emsp;
                        <select onChange={handlePerpage} name="optionPerpage">
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                        </select>
                        &emsp; bản ghi trên tổng số <b>{200}</b> bản ghi </label>
                </Col>
            </Row>
        </div>
    )
}
