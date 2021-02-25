import {Button, Col, Row, Toast} from "react-bootstrap";
import {useEffect, useState} from "react";
import ToastDemo from "./ToastDemo";

export default function Test() {

    const [isShow, setIsShow] = useState(false);
    const [message, setMessage] = useState("");
    const [code, setCode] = useState(null);

    function call(){
       setIsShow(true);
       setCode(200);
       setMessage("thuc hien thanh cong");
    }

    return (
        <>
            <ToastDemo isShow={isShow} message ={message} code = {code} />
            <Button onClick={call}>
                Toggle Toast <strong>with</strong> Animation
            </Button>
        </>
    );
}
