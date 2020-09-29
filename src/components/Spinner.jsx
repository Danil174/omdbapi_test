import React from 'react';
import { Container, Grid, CircularProgress } from '@material-ui/core';

const Spinner = () => {
  return (
    <Container maxWidth="lg">
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{ height: '100vh' }}
      >
        <CircularProgress size={100}/>
      </Grid>
    </Container>
  );
};

export default Spinner;
