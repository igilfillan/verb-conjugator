import React from 'react';
import { getForm } from '../utils/utils';
import { tenseLabels } from '../constants';

import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const IndicativoTable = ({data} ) => {

    const orderedForms = [
      getForm(data, 'form_1s'),
      getForm(data, 'form_2s'),
      getForm(data, 'form_3s'),
      getForm(data, 'form_1p'),
      getForm(data, 'form_2p'),
      getForm(data, 'form_3p')
    ];


    return (
      <Table padding='dense'>
          <TableHead>
          <TableRow variant='head'>
            <TableCell scope="col">Form</TableCell>
              <TableCell>
                  {tenseLabels.presente}
              </TableCell>
            <TableCell>
                  {tenseLabels.preterito}
              </TableCell>
            <TableCell>
                  {tenseLabels.imperfecto}
              </TableCell>
            <TableCell>
                  {tenseLabels.condicional}
              </TableCell>
            <TableCell>
                  {tenseLabels.futuro}
              </TableCell>
          </TableRow>
          </TableHead>
          <TableBody>
            {orderedForms.map( (form) => {
              return(
                <TableRow hover key={form.label}>
                  <TableCell component='th' scope="row">{form.label}</TableCell>
                  <TableCell>{form.presente}</TableCell>
                  <TableCell>{form.preterito} </TableCell>
                  <TableCell>{form.imperfecto} </TableCell>
                  <TableCell>{form.condicional} </TableCell>
                  <TableCell>{form.futuro} </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
      </Table>
    )

};

export default IndicativoTable;