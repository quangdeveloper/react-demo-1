import React, {useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Modal} from "react-bootstrap";

export default function Detail(props) {

    const [open, setOpen] = React.useState(true);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">
                <DialogTitle  style={{backgroundColor: "lightskyblue"}} id="alert-dialog-title">{"Qrterminal details"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <label>ID: {props.qrterminal.id}</label><br/>
                        <label>Terminal ID: {props.qrterminal.terminalId}</label><br/>
                        <label>Terminal name: {props.qrterminal.terminalName}</label><br/>
                        <label>Terminal
                            address: {props.qrterminal.terminalAddress ? props.qrterminal.terminalAddress : 'not info'}</label><br/>
                        <label>Merchant ID: {props.qrterminal.merchantId}</label><br/>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
