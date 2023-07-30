import {Avatar, Card, CardContent, CardHeader, IconButton, ListItem, Tooltip, Typography} from "@mui/material";
import React, {Fragment} from "react";
import {EditNote} from '@mui/icons-material';
import {red} from "@mui/material/colors";

const Post = ({post, user, setEditPost, setEditDialogOpen}) => {

    const editPost = () => {
        setEditPost({post: post, username: user.username});
        setEditDialogOpen(true);
    }

    return(
            <ListItem >
                <Card sx={{p: 1, m: 1, width: '100%'}} elevation={6}>
                    <CardHeader
                        avatar={
                            <Tooltip title={user.name} placement="left" arrow>
                                <Avatar sx={{ bgcolor: red[900] }} aria-label={user.username}>
                                    {user.username[0]}
                                </Avatar>
                            </Tooltip>
                        }
                        action={
                            <IconButton aria-label="edit" onClick={editPost}>
                                <EditNote />
                            </IconButton>
                        }
                        title={
                            <Tooltip title={user.name} placement="top" arrow>
                                <Fragment>{user.username}</Fragment>
                            </Tooltip>
                        }
                        subheader={post.title}
                    />
                    <CardContent>
                        <Typography
                            component="div"
                            variant="body1"
                            color="text.secondary"
                        >{post.body}</Typography>
                    </CardContent>
                </Card>
            </ListItem>
    )
}

export default Post;