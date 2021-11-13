import React, { Fragment } from "react";

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

const Post = (props) => {
  const classes = useStyle();

  const setIdHandler = () => props.setSelectedId(props.post._id);

  console.log("Logging");
  console.log(props.post);

  return (
    <Fragment>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={props.post.selectedFile}
          title={props.post.title}
        />
        <div className={classes.overlay}>
          <Typography variant="h6">{props.post.createdBy}</Typography>
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
          <Typography className={classes.title} variant="h5" gutterBottom>
            {props.post.message}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button size="small" color="primary">
            <ThumbUpAltIcon fontSize="small" />
            Like{props.post.likeCount}
          </Button>
          <Button size="small" color="primary">
            <DeleteIcon fontSize="small" />
            Delete
          </Button>
        </CardActions>
      </Card>
    </Fragment>
  );
};

export default Post;
