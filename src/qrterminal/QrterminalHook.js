import React, {useEffect, useState} from "react";
import {Button, Card, Form, FormGroup, Table} from "react-bootstrap";
import './qrterminal.css';
import Popup from "reactjs-popup";
import Detail from "./detail/detail";
import Add from "./add/add";
import {searchData} from "./common-function";

function QrterminalHook() {

    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [items, setItems] = useState([]);
    const [keyword, setKeyword] = useState('');
    const [pageNo, setPageNo] = useState(1);
    const [pageSize, setPageSize] = useState(10);


    useEffect(() => {

        const params = {
            pageNo: 1,
            pageSize: 10,
            keyword: keyword
        }

        searchData(params)
            .then(result => {
                setIsLoaded(true);
                setItems(result.data.value.Result);
            })
            .catch(error => {
                setIsLoaded(true);
                setError('System error');
            });
    }, [keyword]);


    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                <Card>
                    <Form id="user-search">
                        <FormGroup>
                            <Form.Label>Nhập từ khóa:</Form.Label>
                            <Form.Control className="text" type="text" placeholder="Enter keyword"
                                          value={keyword}
                                          onChange={keyword => setKeyword(keyword.target.value)}/>
                        </FormGroup>
                        <Add id={0}/>
                    </Form>
                </Card>
                <Card id="table-card">
                    <Table striped bordered hover>
                        <thead>
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
                        {items.map((qrterminal, i) => (<RowData key={i} stt={i + 1} qrterminal={qrterminal}/>))}
                        </tbody>
                    </Table>
                </Card>
            </div>
        );
    }
}

function RowData(props) {
    return (
        <tr>
            <td>{props.stt}</td>
            <td>{props.qrterminal.id}</td>
            <td>{props.qrterminal.terminalId}</td>
            <td>{props.qrterminal.terminalName}</td>
            <td>{props.qrterminal.terminalAddress}</td>
            <td>{props.qrterminal.merchantId}</td>
            <td>
                <Popup trigger={<Button>Detail</Button>}>
                    <div>
                        <Detail qrterminal={props.qrterminal}/>
                    </div>
                </Popup>
            </td>
            <td>
                <Add id={props.qrterminal.id}/>
            </td>
        </tr>
    );
}

export default QrterminalHook;
