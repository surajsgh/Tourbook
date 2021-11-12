import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import { Grid, CircularProgress } from "@mui/material";

import Post from "./Post/Post";
import useStyle from "./Style";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyle();

  console.log(posts);

  return (
    <Fragment>
      {posts.length === 0 ? (
        <CircularProgress />
      ) : (
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          {posts.result.map((post) => (
            <Grid key={post._id} item xs={12} sm={6}>
              <Post post={post} />
            </Grid>
          ))}
        </Grid>
      )}
    </Fragment>
  );
};

export default Posts;
