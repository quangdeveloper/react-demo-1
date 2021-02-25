import {Toast} from "react-bootstrap";

export default function ToastDemo(props){

    return(
        <Toast show={props.isShow} delay={10} autohide={true}>
            <Toast.Header>
                <strong className="mr-auto">Thông báo</strong>
                <small>Just now</small>
            </Toast.Header>
            <Toast.Body>{props.message}</Toast.Body>
        </Toast>
    )
}
