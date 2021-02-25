import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Card, Col, Nav, Navbar, Row, Table} from "react-bootstrap";

export default function ToastService(){

    function notify(){
        let message  = "Thuc hien thanh cong";
        toast.info(message);
    }

    function notify2(){
        let message  = "Thuc hien thanh cong";
        toast.success(message);
    }
    function notify3(){
        let message  = "Thuc hien thanh cong";
        toast.error(message);
    }

    return (
        <div>
            <div style={{marginBottom: 30}}>
                <Navbar bg="light" expand="lg" >
                    <Navbar.Brand href="#home">Manager - Qrterminal</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>

            <Card id="table-card">
                <Table striped bordered hover>
                    <thead style={{textAlign:"center"}}>
                    <tr>
                        <td>STT</td>
                        <td>ID</td>
                        <td>Terminal ID</td>
                        <td>Terminal Name</td>
                        <td>Terminal Address</td>
                        <td>Merchant ID</td>
                        <td colSpan={2}>Chức năng</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>STT</td>
                        <td>ID</td>
                        <td>Terminal ID</td>
                        <td>Terminal Name</td>
                        <td>Terminal Address</td>
                        <td>Merchant ID</td>
                        <td colSpan={2}>Chức năng</td>
                    </tr>
                    <tr>
                        <td>STT</td>
                        <td>ID</td>
                        <td>Terminal ID</td>
                        <td>Terminal Name</td>
                        <td>Terminal Address</td>
                        <td>Merchant ID</td>
                        <td colSpan={2}>Chức năng</td>
                    </tr>
                    <tr>
                        <td>STT</td>
                        <td>ID</td>
                        <td>Terminal ID</td>
                        <td>Terminal Name</td>
                        <td>Terminal Address</td>
                        <td>Merchant ID</td>
                        <td colSpan={2}>Chức năng</td>
                    </tr>
                    <tr>
                        <td>STT</td>
                        <td>ID</td>
                        <td>Terminal ID</td>
                        <td>Terminal Name</td>
                        <td>Terminal Address</td>
                        <td>Merchant ID</td>
                        <td colSpan={2}>Chức năng</td>
                    </tr> <tr>
                        <td>STT</td>
                        <td>ID</td>
                        <td>Terminal ID</td>
                        <td>Terminal Name</td>
                        <td>Terminal Address</td>
                        <td>Merchant ID</td>
                        <td colSpan={2}>Chức năng</td>
                    </tr> <tr>
                        <td>STT</td>
                        <td>ID</td>
                        <td>Terminal ID</td>
                        <td>Terminal Name</td>
                        <td>Terminal Address</td>
                        <td>Merchant ID</td>
                        <td colSpan={2}>Chức năng</td>
                    </tr> <tr>
                        <td>STT</td>
                        <td>ID</td>
                        <td>Terminal ID</td>
                        <td>Terminal Name</td>
                        <td>Terminal Address</td>
                        <td>Merchant ID</td>
                        <td colSpan={2}>Chức năng</td>
                    </tr> <tr>
                        <td>STT</td>
                        <td>ID</td>
                        <td>Terminal ID</td>
                        <td>Terminal Name</td>
                        <td>Terminal Address</td>
                        <td>Merchant ID</td>
                        <td colSpan={2}>Chức năng</td>
                    </tr>
                    </tbody>
                </Table>
            </Card>


            <button onClick={notify}>Notify!</button><br/>
            <button onClick={notify2}>Notify!</button><br/>
            <button onClick={notify3}>Notify!</button>
            <ToastContainer
                position="top-right"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
}
