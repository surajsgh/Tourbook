import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined";
import {
  CardActions,
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizonIcon from "@mui/icons-material/MoreHoriz";

import moment from "moment";

import useStyle from "./Style";
import deletePost from "./../../../Actions/DeletePosts";
import likePost from "./../../../Actions/LikePosts";

const Post = (props) => {
  const dispatch = useDispatch();
  const classes = useStyle();

  const setIdHandler = () => props.setSelectedId(props.post._id);

  const deletePostHandler = () => dispatch(deletePost(props.post._id));

  const likePostHandler = () => dispatch(likePost(props.post._id));

  const user = JSON.parse(localStorage.getItem("profile"));

  const Likes = () => {
    if (props.post.likes.length > 0) {
      return props.post.likes.find(
        (like) => like === (user?.result?.googleId || user?.result?._id)
      ) ? (
        <>
          <ThumbUpAltIcon fontSize="small" />
          &nbsp;
          {props.post.likes.length > 2
            ? `You and ${props.post.likes.length - 1} others`
            : `${props.post.likes.length} like${
                props.post.likes.length > 1 ? "s" : ""
              }`}
        </>
      ) : (
        <>
          <ThumbUpAltOutlined fontSize="small" />
          &nbsp;{props.post.likes.length}{" "}
          {props.post.likes.length === 1 ? "Like" : "Likes"}
        </>
      );
    }

    return (
      <>
        <ThumbUpAltOutlined fontSize="small" />
        &nbsp;Like
      </>
    );
  };

  return (
    <Fragment>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={props.post.selectedFile}
          title={props.post.title}
        />
        <div className={classes.overlay}>
          <Typography variant="h6">{props.post.name}</Typography>
          <Typography variant="body2">
            {moment(props.post.createdAt).fromNow()}
          </Typography>
        </div>
        <div className={classes.overlay2}>
          <Button
            style={{ color: "white" }}
            size="small"
            onClick={setIdHandler}
          >
            <MoreHorizonIcon fontSize="default" />
          </Button>
        </div>
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary">
            {props.post.tags.map((tag) => `#${tag} `)}
          </Typography>
        </div>
        <CardContent>
          <Typography
            className={classes.title}
            variant="h5"
            gutterBottom
            component="h2"
          >
            {props.post.title}
          </Typography>
          <Typography
            className={classes.title}
            variant="body2"
            color="textSecondary"
            component="p"
            gutterBottom
          >
            {props.post.message}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button
            size="small"
            color="primary"
            disabled={!user?.result}
            onClick={likePostHandler}
          >
            <Likes />
          </Button>
          <Button size="small" color="primary" onClick={deletePostHandler}>
            <DeleteIcon fontSize="small" />
            Delete
          </Button>
        </CardActions>
      </Card>
    </Fragment>
  );
};

export default Post;
