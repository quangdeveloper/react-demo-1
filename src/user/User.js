import React from "react";
import {Button, Col, Container, Form, FormGroup, Row, Table} from 'react-bootstrap';
import Popup from "reactjs-popup";
import AlertDialog from "../alert-dialog/AlertDialog";

class User extends React.Component {

    tableStyle = {
        border: 1,
        borderColor: "blue",
        width: 600,
        borderStyle: "solid"
    }

    constructor(props) {
        super(props);
        this.state = {
            listUser: [
                {
                    id: 1,
                    name: 'Nguyen Van Quang',
                    age: 23,
                    dateOfBirth: '02/07/1998'
                },
                {
                    id: 2,
                    name: "Nguyen Van Bac",
                    age: 29,
                    dateOfBirth: "02/07/1993"
                },
            ],
            id: '',
            name: '',
            age: '',
            dateOfBirth: '',
            isLoading: false,
            qrterminalList: [],
            error: ''
        };
    }

    addUser() {
        console.log("name in state: " + this.state.name);
        let user = {
            name: this.refs.name.value,
            age: this.refs.age.value,
            dateOfBirth: this.refs.dateOfBirth.value,
        };

        let listUser = this.state.listUser.slice();
        user.id = listUser[listUser.length - 1].id + 1;
        listUser.push(user);
        this.setState({listUser: listUser});
    }

    refreshForm() {
        this.setState({
            name: '',
            age: '',
            dateOfBirth: '',
        });
    }

    editUser(userEdit) {

        let user = {
            id: userEdit.id,
            name: this.refs.name.value,
            age: this.refs.age.value,
            dateOfBirth: this.refs.dateOfBirth.value
        };

        let index;
        let listUser = this.state.listUser.slice();
        for (let i = 0; i < listUser.length; i++) {
            if (listUser[i].id === userEdit.id) {
                index = i;
            }
        }
        if (index !== undefined) {
            listUser.splice(index, 1);
            console.log(user);
            listUser.splice(index, 0, user);
            this.setState({listUser: listUser});
        }
    }

    handleChange(event) {
        this.setState({
            id: event.target.value.id,
            name: event.target.value.name,
            age: event.target.value.age,
            dateOfBirth: event.target.value.dateOfBirth
        });
    }

    deleteUser(id) {
        let index;
        let listUser = this.state.listUser.slice();
        for (let i = 0; i < listUser.length; i++) {
            if (listUser[i].id === id) {
                index = i;
            }
        }
        listUser.splice(index, 1);
        this.setState({listUser: listUser});
        window.alert("Delete user successful!")
    }


    getData() {

    }

    componentDidMount() {
        fetch('localhost:8080/qr-terminal?pageNo=1&pageSize=10')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoading: true,
                        qrterminalList: result.value
                    })
                },
                (error)=>{
                    this.setState({
                        qrterminalList: [],
                        error: 'Loi he thong'
                    })
                }
            )
    }

    handleChange(event) {
        this.setState({
            id: event.target.value.id,
            name: event.target.value.name,
            age: event.target.value.age,
            dateOfBirth: event.target.value.dateOfBirth
        });
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col lg={7}>
                            <h2>Danh sách người dùng</h2>
                            <Table striped bordered hover style={this.tableStyle}>
                                <thead>
                                <tr>
                                    <td>Họ và tên</td>
                                    <td>Tuổi</td>
                                    <td>Ngày sinh</td>
                                    <td colSpan={2}>Chức năng</td>
                                </tr>
                                </thead>
                                <tbody>
                                {this.state.listUser.map((user, i) =>
                                    <TableData key={i} user={user} editUser={this.editUser.bind(this, user)}
                                               deleteUser={this.deleteUser.bind(this, user.id, "ahihi")}/>)}
                                </tbody>
                            </Table>
                        </Col>
                        <Col lg={5}>
                            <h2>Thông tin người dùng</h2>
                            <Form>
                                <FormGroup controlId={"name"}>
                                    <Form.Label>Nhập tên:</Form.Label>
                                    <Form.Control type="text" placeholder="Nhập tên"
                                                  ref="name" value={this.state.name}
                                                  onChange={this.handleChange.bind(this)}/>
                                    <Form.Text className="text-muted">Trường này không được bỏ trống</Form.Text>
                                </FormGroup>

                                <FormGroup controlId={"age"}>
                                    <Form.Label>Nhập tuổi:</Form.Label>
                                    <Form.Control type="text" placeholder="Nhập tuổi"
                                                  ref="age" value={this.state.age}
                                                  onChange={this.handleChange.bind(this)}/>
                                    <Form.Text className="text-muted">Trường này không được bỏ trống</Form.Text>
                                </FormGroup>

                                <FormGroup controlId={"dateOfBirth"}>
                                    <Form.Label>Nhập ngày sinh:</Form.Label>
                                    <Form.Control type="text" placeholder="Nhập ngày sinh"
                                                  ref="dateOfBirth" value={this.state.dateOfBirth}
                                                  onChange={this.handleChange.bind(this)}/>
                                    <Form.Text className="text-muted">Trường này không được bỏ trống</Form.Text>
                                </FormGroup>
                                <Button variant="primary" onClick={this.addUser.bind(this)}>Thêm người</Button>
                                <Button variant="warning" onClick={this.refreshForm.bind(this)}>Làm mới</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

class TableData extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.user.name}</td>
                <td>{this.props.user.age}</td>
                <td>{this.props.user.dateOfBirth}</td>
                <td>
                    <Button variant={"outline-info"} onClick={this.props.editUser}>Edit</Button>
                </td>
                <td>
                    <Button variant={"outline-danger"} onClick={this.props.deleteUser}>Delete</Button>
                </td>
                <td>
                    <Popup trigger={<Button variant={"outline-danger"}>Popup</Button>}
                           position="right center">
                        <AlertDialog/>
                    </Popup>
                </td>
            </tr>
        );
    }
}

export default User;
