import React, {useEffect, useState} from "react";
import {Button, Form, FormGroup, Modal} from "react-bootstrap";
import axios from "axios";
import {createQrTerminal, findByID, updateQrTerminal} from "../common-function";

export default function Add(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [id, setID] = useState(0);
    const [terminalId, setTerminalId] = useState(0);
    const [terminalName, setTerminalName] = useState('');
    const [terminalAddress, setTerminalAddress] = useState('');
    const [merchantId, setMerchantId] = useState(0);
    const [oldTerminal, setOldTerminal] = useState({});

    function create() {

        var termianl = {
            id: id,
            termianlId: terminalId,
            termianlName: terminalName,
            terminalAddress: terminalAddress,
            merchantId: merchantId
        }

        createQrTerminal(termianl)
            .then(result => {
                window.alert(result.data.value);
            })
            .catch(error => {
                window.alert(error);
                handleClose();
            })
    }

    function update() {

        var termianl = {
            id: id,
            termianlId: terminalId,
            termianlName: terminalName,
            terminalAddress: terminalAddress,
            merchantId: merchantId
        }

        updateQrTerminal(termianl)
            .then(result => {
                window.alert(result.data.value);
            })
            .catch(error => {
                window.alert(error);
                handleClose();
            })
    }

    function findById(id) {

        findByID(id);
    }


    return (
        <div>
            <Button variant="primary" hidden={props.id === 0} onClick={handleShow}>
                Cập nhập
            </Button>
            <Button variant="primary" hidden={props.id !== 0} onClick={handleShow}>
                Thêm mới
            </Button>

            <Modal show={show}
                   onHide={handleClose}
                   backdrop="static"
                   keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title> Thông tin Qrterminal </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <FormGroup controlId={"id"}>
                            <Form.Label>Nhập ID:</Form.Label>
                            <Form.Control type="text" placeholder="Nhập id"
                                          onChange={id => setID(id.target.value)}/>
                            <Form.Text className="text-muted" >Trường này không được bỏ trống</Form.Text>
                        </FormGroup>

                        <FormGroup controlId={"terminalId"}>
                            <Form.Label>Nhập Terminal ID:</Form.Label>
                            <Form.Control type="text" placeholder="Nhập terminal id"
                                          onChange={terminalId => setTerminalId(terminalId.target.value)}/>
                            <Form.Text className="text-muted">Trường này không được bỏ trống</Form.Text>
                        </FormGroup>

                        <FormGroup controlId={"terminalName"}>
                            <Form.Label>Nhập Terminal Name:</Form.Label>
                            <Form.Control type="text" placeholder="Nhập Terminal Name"
                                          onChange={terminalName => setTerminalName(terminalName.target.value)}/>
                            <Form.Text className="text-muted">Trường này không được bỏ trống</Form.Text>
                        </FormGroup>

                        <FormGroup controlId={"terminalAddress"}>
                            <Form.Label>Nhập Terminal Address:</Form.Label>
                            <Form.Control type="text" placeholder="Nhập Terminal Address"
                                          onChange={terminalAddress => setTerminalAddress(terminalAddress.target.value)}/>
                            <Form.Text className="text-muted">Trường này không được bỏ trống</Form.Text>
                        </FormGroup>

                        <FormGroup controlId={"terminalAddress"}>
                            <Form.Label>Nhập Merchant Id:</Form.Label>
                            <Form.Control type="text" placeholder="Nhập Merchant Id"
                                          onChange={merchantId => setMerchantId(merchantId.target.value)}/>
                            <Form.Text className="text-muted">Trường này không được bỏ trống</Form.Text>
                        </FormGroup>

                        <Button onClick={create} hidden={props.id !== 0}>Thêm mới</Button>
                        <Button onClick={update} hidden={props.id === 0}>Cập nhập </Button>
                        <Button onClick={handleClose}>Hủy</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
}
