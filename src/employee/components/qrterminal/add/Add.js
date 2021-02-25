import React, {useEffect, useState} from "react";
import {Button, Form, FormGroup, Modal} from "react-bootstrap";
import {createQrTerminal, findByID, searchData, updateQrTerminal} from "../../../shared/services/qrterminal.services";
import {Pen, PlusCircle} from "react-bootstrap-icons";
import {toast, ToastContainer} from "react-toastify";
import {Formik, FormikConsumer} from "formik";
import {Input} from "@material-ui/core";

export default function Add(props) {

    const validates = (values) => {
        const errors = {};

        if (!values.terminalId || values.terminalId === '') {
            errors.terminalId = "Field required";
        }else if (values.terminalId < 1) {
            errors.terminalId = "Value invalid";
        }

        if (!values.terminalName || values.terminalName === '') {
            errors.terminalName = "Field required";
        }

        if (!values.terminalAddress || values.terminalAddress === '') {
            errors.terminalAddress = "Field required";
        }

        if (!values.merchantId || values.merchantId === '') {
            errors.merchantId = "Field required";
        }else if (values.merchantId < 1) {
            errors.merchantId = "Value invalid";
        }
        return errors;
    }

    const initValue =  {
        id: 0,
        terminalId: 0,
        terminalName: '',
        terminalAddress: '',
        merchantId: 0
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [id, setID] = useState(props.id);

    function create(termianl) {

        createQrTerminal(termianl)
            .then(result => {
                handleClose();
                toast.success(result.data.message);
            })
            .catch(error => {
                toast.error(error);
                handleClose();
            })
    }

    function update(terminal) {

        updateQrTerminal(terminal)
            .then(result => {
                handleClose();
                toast.success(result.data.message)
            })
            .catch(error => {
                handleClose();
                toast.error(error);
            })
    }
    const onSubmit = (values, {setSubmitting}) => {
        const data = {
            id: id,
            terminalId: values.terminalId,
            terminalName: values.terminalName,
            terminalAddress: values.terminalAddress,
            merchantId: values.merchantId
        }
        if (id === 0 || id == null) {
            create(data)
        } else {
            update(data)
        }
    }

    return (
        <div>
            <Button variant="primary" hidden={props.id === 0} onClick={handleShow}>
                <Pen/>
            </Button>
            <Button variant="primary" hidden={props.id !== 0} onClick={handleShow}>
                <PlusCircle/>
            </Button>

            <Modal show={show}
                   onHide={handleClose}
                   backdrop="static"
                   keyboard={false}>
                <Modal.Header closeButton style={{backgroundColor: "lightskyblue"}}>
                    <Modal.Title> Thông tin Qrterminal </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik
                        initialValues={initValue}
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
                            <Form onSubmit={handleSubmit}>
                                <FormGroup>
                                    <Form.Label>Nhập Terminal ID:</Form.Label><br/>
                                    <Input onChange={handleChange} name="terminalId" placeholder="Nhập Terminal Id"
                                           onBlur={handleBlur}
                                           fullWidth/>
                                    <Form.Text
                                        className="text-muted">{touched.terminalId && errors.terminalId ? errors.terminalId : null}</Form.Text>
                                </FormGroup>

                                <FormGroup>
                                    <Form.Label>Nhập Terminal Name:</Form.Label><br/>
                                    <Input onChange={handleChange} name="terminalName" placeholder="Nhập Terminal Name"
                                           onBlur={handleBlur}
                                           fullWidth/>
                                    <Form.Text
                                        className="text-muted">{touched.terminalName && errors.terminalName ? errors.terminalName : null}</Form.Text>
                                </FormGroup>

                                <FormGroup>
                                    <Form.Label>Nhập Terminal Address:</Form.Label><br/>
                                    <Input onChange={handleChange} name="terminalAddress" onBlur={handleBlur}
                                           placeholder="Nhập Terminal Address" fullWidth/>
                                    <Form.Text
                                        className="text-muted">{touched.terminalAddress && errors.terminalAddress ? errors.terminalAddress : null}</Form.Text>
                                </FormGroup>

                                <FormGroup>
                                    <Form.Label>Nhập Merchant ID:</Form.Label><br/>
                                    <Input onChange={handleChange} name="merchantId" placeholder="Nhập Merchant Id"
                                           onBlur={handleBlur}
                                           fullWidth/>
                                    <Form.Text
                                        className="text-muted">{touched.merchantId && errors.merchantId ? errors.merchantId : null}</Form.Text>
                                </FormGroup>

                                <Button type="submit" hidden={props.id !== 0}>Thêm mới</Button>&emsp;
                                <Button type={"submit"} hidden={props.id === 0}>Cập nhập </Button>&emsp;
                                <Button variant="warning" onClick={handleClose}>Hủy</Button>
                            </Form>
                        )}
                    </Formik>
                </Modal.Body>
            </Modal>
        </div>
    );
}
