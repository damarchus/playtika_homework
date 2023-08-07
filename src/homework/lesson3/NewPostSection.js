import {Button, FormControl, InputLabel, MenuItem, Select, Skeleton, TextField} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import React, {Fragment, useState} from "react";
import {postJson} from "../utils/JsonUtils";

const NewPostSection = ({loading, users, setStatus, setStatusMessage, setSnackbarOpen}) => {

    const[newPost, setNewPost] = useState({userId: '', title: '', body: ''});

    const handleChangedField = (event) => {
        setNewPost((prevState) => ({...prevState, [event.target.name]: event.target.value}));
    }

    const setUpdateStatus = (status, message) => {
        setStatus(status)
        setStatusMessage(message)
        setSnackbarOpen(true)
    }

    const handlePost = async () => {
        if(newPost.userId === '' || newPost.title === '' || newPost.body === '') {
            setUpdateStatus("error", "Missed one or several of required fields")
        } else {
            await postJson('https://jsonplaceholder.typicode.com/posts', newPost)
                .then(status => {
                    status
                        ? setUpdateStatus("success", "New post was published")
                        : setUpdateStatus("error", "Error occurred during new post creation")
                });
        }
    };

    return(
        <FormControl sx={{height: 250, width: '90%', mx: 'auto'}}>
            { loading
                ? <Skeleton sx={{m: 0.5, width: 0.3}} variant='rounded' />
                : <Fragment>
                    <InputLabel id="user-select-label">User</InputLabel>
                    <Select sx={{m: 0.5, width: 0.3}}
                            size="small"
                            value={newPost.userId}
                            labelId="user-select-label"
                            name='userId'
                            required
                            onChange={handleChangedField}>
                        {users.map(user =>
                            <MenuItem key={user.id} value={user.id}>{user.username}</MenuItem>
                        )}
                    </Select>
                  </Fragment> }
            <TextField sx={{m: 0.5}}
                       size="small"
                       label='Title'
                       name='title'
                       required
                       onChange={handleChangedField}
                       placeholder='New post topic'/>
            <TextField sx={{m: 0.5}}
                       size="small"
                       multiline
                       rows={3}
                       label='New Post'
                       name='body'
                       required
                       onChange={handleChangedField}
                       placeholder='Type your post here'/>
            <Button sx={{m: 0.5}}
                    size="small"
                    variant='contained'
                    onClick={handlePost}
                    endIcon={<SendIcon />}>
                Post
            </Button>
        </FormControl>
    )
}

export default NewPostSection;