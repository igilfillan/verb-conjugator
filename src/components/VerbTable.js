import React from 'react';
import './verbtable.css';


import Paper from '@material-ui/core/Paper';

const VerbTable = ( {children} ) => (
    <Paper className='extraClass'>
      {children}
    </Paper>
);

export default VerbTable;