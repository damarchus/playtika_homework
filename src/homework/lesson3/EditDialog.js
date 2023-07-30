import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {Button, TextField} from "@mui/material";
import {useState} from "react";
import {putJson} from "../utils/JsonUtils";

const EditDialog = ({post, username, open, setOpen, setStatus, setStatusMessage, setSnackbarOpen}) => {
    const [updatedPost, setUpdatedPost] = useState({});

    const handleClose = () => {
        setOpen(false);
    };

    const handleEdit = async () => {
        await putJson('https://jsonplaceholder.typicode.com/posts/' + post.id, updatedPost)
            .then(status => {
                setStatus(status ? "success" : "error")
                setStatusMessage(status ? "Update was successful" : "Error occurred during update attempt")
            })
            .then(() => setOpen(false))
            .then(() => setSnackbarOpen(true));
    };

    const handleUpdateField = (event) => {
        setUpdatedPost((prevState) => ({...prevState, [event.target.id]: event.target.value}));
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Edit message for {username}</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="title"
                    label="Title"
                    type="text"
                    fullWidth
                    variant="outlined"
                    defaultValue={post.title}
                    onChange={handleUpdateField}
                />
                <TextField
                    margin="dense"
                    id="body"
                    label="Post"
                    type="text"
                    fullWidth
                    variant="outlined"
                    multiline
                    rows={3}
                    defaultValue={post.body}
                    onChange={handleUpdateField}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleEdit}>Edit</Button>
            </DialogActions>
        </Dialog>
    );
}

export default EditDialog;