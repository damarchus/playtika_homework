import {Container, Divider, List, Skeleton} from "@mui/material";
import React, {useState} from "react";
import Post from "./Post";
import EditDialog from "./EditDialog";
import UpdateSnackbar from "./UpdateSnackbar";
import NewPostSection from "./NewPostSection";

const PostsContainer = ({posts, users, loading}) => {
    const[updateStatus, setUpdateStatus] = useState('');
    const[statusMessage, setStatusMessage] = useState('');
    const[editDialogOpen, setEditDialogOpen] = useState(false);
    const[updateSnackbarOpen, setUpdateSnackbarOpen] = useState(false);
    const[editPost, setEditPost] = useState({post: {}, username: ''});

    return(
        <Container sx={{height: '90vh'}}>
            { loading
                ? <Skeleton variant='rounded' sx={{height: '80%'}} />
                : <List sx={{overflow: 'hidden', overflowY: 'scroll', height: '80%'}}>
                    {posts.map(post => {
                        let user = users.find(usr => usr.id === post.userId);
                        return(
                            <Post key={post.id} post={post} user={user} setEditPost={setEditPost} setEditDialogOpen={setEditDialogOpen}/>
                        );
                    })}
                  </List> }
            <Divider variant="inset" sx={{m: 2}}/>
            <NewPostSection
                loading={loading}
                users={users}
                setStatus={setUpdateStatus}
                setStatusMessage={setStatusMessage}
                setSnackbarOpen={setUpdateSnackbarOpen}
            />

            <EditDialog
                post={editPost.post}
                username={editPost.username}
                open={editDialogOpen}
                setOpen={setEditDialogOpen}
                setStatus={setUpdateStatus}
                setStatusMessage={setStatusMessage}
                setSnackbarOpen={setUpdateSnackbarOpen}
            />
            <UpdateSnackbar
                status={updateStatus}
                statusMessage={statusMessage}
                open={updateSnackbarOpen}
                setOpen={setUpdateSnackbarOpen}
            />
        </Container>
    )
}

export default PostsContainer;