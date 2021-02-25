import React, {useEffect, useState} from "react";
import {Button, Card, Col, Row, Table} from "react-bootstrap";
import Popup from "reactjs-popup";
import Detail from "../detail/Detail";
import Add from "../add/Add";
import {searchData} from "../../../shared/services/qrterminal.services";
import Pagination from "react-js-pagination";
import {Form, Formik} from "formik";
import {Helmet} from "react-helmet";
import {Input, Select} from "@material-ui/core";
import { InfoCircle, Search} from "react-bootstrap-icons";

export default function Qrterminal() {

    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [items, setItems] = useState([]);
    const [totalItem, setTotalItem] = useState(10);
    const [page_config, setPageConfig] = useState({
        page_index: 1,
        page_size: 10
    });

    function handleChangePage(event) {
        setPageConfig({
            ...page_config,
            page_index: event,
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
    useEffect(() => {
        const params = {
            keyword: '',
            pageNo: page_config.page_index,
            pageSize: page_config.page_size,
        }
        searchData(params)
            .then(result => {
                setIsLoaded(true);
                setItems(result.data.value.Result);
                setTotalItem(result.data.value.Total);
            })
            .catch(error => {
                setIsLoaded(true);
                setError('System error');
            });
    }, [page_config.page_size, page_config.page_index]);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                <Helmet>
                    <title>Helmet Sea</title>
                </Helmet>
                <Row>
                    <Col lg={8}>
                        <div id={"search-bar"}>
                            <Formik
                                initialValues={
                                    {
                                        keyword: '',
                                    }
                                }

                                validate={
                                    (values) => {
                                        const errors = {};
                                        return errors;
                                    }
                                }

                                onSubmit={(values, {setSubmitting}) => {
                                    const data = {
                                        keyword: values.keyword,
                                        pageNo: 1,
                                        pageSize: page_config.page_size,
                                    }
                                    setPageConfig({...page_config, page_index: 1})
                                    searchData(data);
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
                                        <Input style={{minWidth: 500}} type="text" name="keyword" placeholder="Nhập từ khóa" />&nbsp;
                                        <Button type="submit" onSubmit={handleSubmit}><Search/></Button>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <Add id={0}/>
                    </Col>
                </Row>

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
                        {items.map((qrterminal, i) =>
                            (<RowData key={i} stt={i + 1 + (page_config.page_index -1)*page_config.page_size} qrterminal={qrterminal}/>)
                        )}
                        </tbody>
                    </Table>
                    <Row>
                        <Col lg={5}>
                            <Pagination
                                activePage={page_config.page_index}
                                itemsCountPerPage={page_config.page_size}
                                innerClass="pagination Pagination-left"
                                totalItemsCount={totalItem}
                                itemClass="page-item"
                                linkClass="page-link"
                                pageRangeDisplayed={5}
                                onChange={handleChangePage}
                            />
                        </Col>
                        <Col lg={5}>
                            <label className="style_display float-right">Hiển thị &emsp;
                                <Select onChange={handlePerpage} name="optionPerpage">
                                    <option value="10">10</option>
                                    <option value="25">25</option>
                                    <option value="50">50</option>
                                    <option value="100">100</option>
                                </Select>
                            </label>
                        </Col>
                    </Row>
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
            <td>{props.qrterminal.terminalAddress !== null ? props.qrterminal.terminalAddress : 'not info'}</td>
            <td>{props.qrterminal.merchantId}</td>
            <td>
                <Popup trigger={<Button><InfoCircle/></Button>}>
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

