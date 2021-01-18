import React, {useState} from "react";
import {Button, Table} from "react-bootstrap";


function TableData(props) {

    const [items, setItems] = useState(props.items);

    var tableStyle = {
        border: 1,
        borderColor: "blue",
        width: 1200,
        borderStyle: "solid"
    }

    return (
        <div>
            <Table striped bordered hover style={tableStyle}>
                <thead>
                <tr>
                    <td>STT</td>
                    <td>ID</td>
                    <td>Terminal ID</td>
                    <td>Terminal Name</td>
                    <td>Terminal Address</td>
                    <td>Merchant ID</td>
                </tr>
                </thead>
                <tbody>
                {items.map((qrterminal, i) => (<RowData key={i} qrterminal={qrterminal}/>))}
                </tbody>
            </Table>
            <Button onClick={getData}>LoadPage</Button>
        </div>
    );
}
function getData() {
    fetch('http://localhost:8080/qr-terminal?pageNo=1&pageSize=20')
        .then(res => res.json())
        .then(
            (result) => {
            },
            (error) => {
            }
        )
}

function RowData(props) {
    return (
        <tr>
            <td>{props.key}</td>
            <td>{props.qrterminal.id}</td>
            <td>{props.qrterminal.terminalId}</td>
            <td>{props.qrterminal.terminalName}</td>
            <td>{props.qrterminal.terminalAddress}</td>
            <td>{props.qrterminal.merchantId}</td>
        </tr>
    );
}

export default TableData;
