import {Divider, Skeleton} from "@mui/material";
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
        <div className="postsContainer">
            <div className="postsListContainer">
                { loading
                    ? <Skeleton variant='rounded' />
                    : <ul className="nonDecorated">
                        {posts.map(post => {
                            let user = users.find(usr => usr.id === post.userId);
                            return(
                                <Post key={post.id} post={post} user={user} setEditPost={setEditPost} setEditDialogOpen={setEditDialogOpen}/>
                            );
                        })}
                    </ul> }
            </div>
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
        </div>

    )
}

export default PostsContainer;