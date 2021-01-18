import React from "react";
import {Button, Table} from "react-bootstrap";

class Qrterminal extends React.Component {

    tableStyle = {
        border: 1,
        borderColor: "blue",
        width: 1200,
        borderStyle: "solid"
    }

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    getData() {
        fetch('http://localhost:8080/qr-terminal?pageNo=1&pageSize=20')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.value.Result,
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error: 'System error',
                        item: []
                    });
                }
            )
    }

    componentDidMount() {
        fetch('http://localhost:8080/qr-terminal?pageNo=1&pageSize=10')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.value.Result,
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error: 'System error',
                        item: []
                    });
                }
            )
    }

    render() {
        const {error, isLoaded, items} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <Button onClick={this.getData.bind(this)}>LoadPage</Button>
                    <Table striped bordered hover style={this.tableStyle}>
                        <thead>
                        <tr>
                            <td>ID</td>
                            <td>Terminal ID</td>
                            <td>Terminal Name</td>
                            <td>Terminal Address</td>
                            <td>Merchant ID</td>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.items.map((qrterminal, i) => (<TableData key={i} qrterminal={qrterminal}/>))}
                        </tbody>
                    </Table>
                </div>
            );
        }
    }
}

class TableData extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.qrterminal.id}</td>
                <td>{this.props.qrterminal.terminalId}</td>
                <td>{this.props.qrterminal.terminalName}</td>
                <td>{this.props.qrterminal.terminalAddress}</td>
                <td>{this.props.qrterminal.merchantId}</td>
            </tr>
        );
    }
}


export default Qrterminal;
