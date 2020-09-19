import React from 'react';
import { Grid, Typography } from '@material-ui/core';

const Venue: React.FC = () => {
  return (
    <Grid
      container
      justify='center'
      alignItems='center'
      style={{ height: '100%' }}>
      <Grid item xs={12}>
        <Typography style={{ color: '#fff', textAlign: 'center' }} variant='h1'>
          VENUE
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Venue;
