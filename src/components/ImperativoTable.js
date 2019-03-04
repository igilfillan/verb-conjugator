import React from 'react';
import {getForm} from '../utils/utils';

import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const ImperativoTable = ({afirmativo, negativo} ) => {


  const getImperativeFoem = (form) => {

  };


  const firstPerson = getForm(afirmativo, 'form_2s');
  const firstPersonNebative = getForm(negativo, 'form_2s');


  console.log('firstPerson', firstPerson);
  console.log('firstPersonNegative', firstPersonNebative);

  // getMood


  const orderedForms = [
    getForm(afirmativo, 'form_1s'),
    getForm(negativo, 'form_1s'),
    getForm(afirmativo, 'form_2s'),
    getForm(negativo, 'form_2s'),
    getForm(afirmativo, 'form_3s'),
    getForm(negativo, 'form_3s'),
    getForm(afirmativo, 'form_1p'),
    getForm(negativo, 'form_1p'),
    getForm(afirmativo, 'form_2p'),
    getForm(negativo, 'form_2p'),
    getForm(afirmativo, 'form_3p'),
    getForm(negativo, 'form_3p')
  ];

  console.log('orderedForms', orderedForms);
  
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
          {/*<TableBody>*/}
            {/*{orderedForms.map( (form) => {*/}
              {/*return(*/}
                  {/*<TableRow hover>*/}
                    {/*<TableCell component='th' scope="row">{form.label}</TableCell>*/}
                    {/*<TableCell>{form.presente}</TableCell>*/}
                  {/*</TableRow>*/}
              {/*)*/}
            {/*})}*/}
          {/*</TableBody>*/}
        </Table>
            // <table>
            //     <thead>
            //     <tr>
            //       <th scope="col">
            //           Form
            //       </th>
            //         <th scope="col">
            //             Afirmative
            //         </th>
            //         <th scope="col">
            //             Negativo
            //         </th>
            //     </tr>
            //     </thead>
            //     <tbody>
            //     <tr>
            //       <th scope="row">{formLabels.fs}</th>
            //         <td>--</td>
            //         <td>--</td>
            //     </tr>
            //     <tr>
            //       <th scope="row">{formLabels.ss}</th>
            //       <td>{afirmativoPresente.form_2s} </td>
            //         <td>{negativoPresente.form_2s} </td>
            //     </tr>
            //     <tr>
            //       <th scope="row">{formLabels.ts}</th>
            //       <td>{afirmativoPresente.form_3s} </td>
            //         <td>{negativoPresente.form_3s} </td>
            //     </tr>
            //     <tr>
            //       <th scope="row">{formLabels.fp}</th>
            //
            //       <td>{afirmativoPresente.form_1p} </td>
            //         <td>{negativoPresente.form_1p} </td>
            //     </tr>
            //     <tr>
            //       <th scope="row">{formLabels.sp}</th>
            //
            //       <td>{afirmativoPresente.form_2p} </td>
            //         <td>{negativoPresente.form_2p} </td>
            //     </tr>
            //     <tr>
            //       <th scope="row">{formLabels.fs}</th>
            //
            //       <td>{afirmativoPresente.form_3p} </td>
            //         <td>{negativoPresente.form_3p} </td>
            //     </tr>
            //     </tbody>
            // </table>

    )

};

export default ImperativoTable;