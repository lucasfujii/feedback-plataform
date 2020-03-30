import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default ({ title, label, children, onCancel, onConfirm, cancelText, confirmText }) => {
    return (
        <Dialog
            open={true}
            onClose={onCancel}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description">

            <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
            <DialogContent dividers>
                {label && <DialogContentText id="alert-dialog-description">{label}</DialogContentText>}
                {children}
            </DialogContent>
            <DialogActions>
                <Button onClick={onCancel} color="primary">
                    {cancelText || 'Cancelar'}
                </Button>
                <Button onClick={onConfirm} color="primary" autoFocus>
                    {confirmText || 'Ok'}
              </Button>
            </DialogActions>
        </Dialog>
    );
};
