import React, { Fragment, useState, useEffect } from "react";

import {
  Container,
  CssBaseline,
  AppBar,
  Typography,
  Grow,
  Grid,
} from "@mui/material";

import { useDispatch } from "react-redux";
import getPosts from "./Actions/GetPosts";

import Posts from "./Components/Posts/Posts";
import Form from "./Components/Form/Form";
import useStyles from "./Styles";

const App = () => {
  const [selectedId, setSelectedId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static">
          <Typography
            className={classes.heading}
            variant="h3"
            gutterBottom
            component="div"
            align="inherit"
          >
            TourBook
          </Typography>
        </AppBar>
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
      </Container>
    </Fragment>
  );
};

export default App;
