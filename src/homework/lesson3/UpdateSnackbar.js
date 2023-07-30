import {Snackbar} from "@mui/material";
import MuiAlert from '@mui/material/Alert';
import {forwardRef} from "react";

const SnackbarAlert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const UpdateSnackbar = ({status, statusMessage, open, setOpen}) => {

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <SnackbarAlert onClose={handleClose} severity={status} sx={{ width: '100%' }}>
                {statusMessage}
            </SnackbarAlert>
        </Snackbar>
    );
}

export default UpdateSnackbar;