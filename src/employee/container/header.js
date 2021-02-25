import {Button, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";

export default function Header() {

    function logout() {
        sessionStorage.clear();
        window.location.href = "/";
    }

    return (
        <div style={{marginBottom: 30}}>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Manager - Administrator</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#/qrterminal">Qrterminal</Nav.Link>
                    </Nav>
                    {sessionStorage.getItem('currentUser') ?
                        <a onClick={logout} >Logout</a>
                        : null
                    }
                </Navbar.Collapse>
            </Navbar>
        </div>
    )

}
