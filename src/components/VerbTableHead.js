import React from 'react';
import './verbtable.css';
import Typography from '@material-ui/core/Typography';

const VerbTableHead = ( {children} ) => (
    <Typography align='center' variant='subheading'>
      {children}
    </Typography>
);

export default VerbTableHead;