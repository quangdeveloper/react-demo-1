import {Toast} from "react-bootstrap";

export default function ToastBasic(props) {

    const meStyle = {
        position: 'absolute',
        top: 2,
        right: 3,
        minWidth: 200,
        fadeToggle: 2
    }

    return (
        <Toast style={meStyle} animation={true} show={props.isShow}>
            <Toast.Header>
                <strong className="mr-auto">Thông báo</strong>
                <small>Just now</small>
            </Toast.Header>
            <Toast.Body>{props.message}</Toast.Body>
        </Toast>
    )
}
