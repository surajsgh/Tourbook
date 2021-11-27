import React, { useState, useEffect } from "react";
import { Container, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { getPosts } from "../../Actions/GetPosts";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";

const Home = () => {
  const [selectedId, setSelectedId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [selectedId, dispatch]);

  return (
    <Grow in>
      <Container>
        <Grid
          container
          justify="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={7}>
            <Posts setSelectedId={setSelectedId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form selectedId={selectedId} setSelectedId={setSelectedId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
