import React from 'react';
import {getForm} from '../utils/utils';
import { blankLabel } from '../constants';

import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const ImperativoTable = ({afirmativo, negativo} ) => {

  const normaliseImperative = (afirm, neg) => {
    return {
      label: afirm.label,
      positive: afirm.presente || blankLabel,
      negative: neg.presente || blankLabel,
    }

  };

  const orderedForm = [
    normaliseImperative(getForm(afirmativo, 'form_1s'), getForm(negativo, 'form_1s')),
    normaliseImperative(getForm(afirmativo, 'form_2s'), getForm(negativo, 'form_2s')),
    normaliseImperative(getForm(afirmativo, 'form_3s'), getForm(negativo, 'form_3s')),
    normaliseImperative(getForm(afirmativo, 'form_1p'), getForm(negativo, 'form_1p')),
    normaliseImperative(getForm(afirmativo, 'form_2p'), getForm(negativo, 'form_2p')),
    normaliseImperative(getForm(afirmativo, 'form_3p'), getForm(negativo, 'form_3p'))
  ];
  
  return (
      <Table padding='dense'>
        <TableHead>
          <TableRow variant='head'>
            <TableCell scope="col">Form</TableCell>
            <TableCell>
              Afirmativo
            </TableCell>
            <TableCell>
              Negativo
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orderedForm.map( (form) => {
            return(
                <TableRow hover key={form.label}>
                  <TableCell component='th' scope="row">{form.label}</TableCell>
                  <TableCell>{form.positive}</TableCell>
                  <TableCell>{form.negative}</TableCell>
                </TableRow>
            )
          })}
        </TableBody>
      </Table>
  )

};

export default ImperativoTable;