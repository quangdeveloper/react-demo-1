import {Button, Modal} from "react-bootstrap";
import React, {useState} from "react";
export default function Example() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function  statusDisplay(status) {
        if (status === 1) {
            return (
                <span style={{backgroundColor: "lightgreen"}}>Chưa thanh toán</span>
            )
        } else if (status === 2) {
            return (
                <span style={{backgroundColor: "lightgreen"}}>Đã thanh toán</span>
            )
        } else if (status === 3) {
            return (
                <span style={{backgroundColor: "lightgreen"}}>Hết hạn thanh toán</span>
            )
        } else if (status === 4) {
            return (
                <span style={{backgroundColor: "#F64E60", color: "#FFF"}} >Hủy thanh toán</span>
            )
        } else if (status === 5) {
            return (
                <span style={{backgroundColor: "red", color:"#fff"}} >Khóa</span>
            )
        }
    }

    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Launch static backdrop modal
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {statusDisplay(3)}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

