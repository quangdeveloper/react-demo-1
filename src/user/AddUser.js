import React from "react";
import {Button, Col, Form, FormGroup, Row} from "react-bootstrap";

class AddUser extends React.Component {

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
                </div>
        )
    }
}
