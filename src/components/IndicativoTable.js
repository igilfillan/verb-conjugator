import React from 'react';
import { getTense, getForm } from '../utils/utils';
import {formLabels, tenseLabels} from '../constants';

import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const IndicativoTable = ({data} ) => {

    const presente = getTense(data, 'Presente');
    const preterito = getTense(data, 'Pretérito');
    const imperfecto = getTense(data, 'Imperfecto');
    const condicional = getTense(data, 'Condicional');
    const futuro = getTense(data, 'Futuro');


    getForm(data, 'form_1s');

    //
    // const organisedData = [
    //     {
    //       form: 'fs',
    //       presente: 'blah',
    //       preterito: 'blahe'
    //     },
    //     {
    //       form: 'ss',
    //       presente: 'blahas',
    //       preterito: 'blahaste'
    //     },
    //   ];

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
                <TableRow hover>
                  <TableCell component='th' scope="row">{formLabels.fs}</TableCell>
                  <TableCell>{presente.form_1s}</TableCell>
                  <TableCell>{preterito.form_1s} </TableCell>
                  <TableCell>{imperfecto.form_1s} </TableCell>
                  <TableCell>{condicional.form_1s} </TableCell>
                  <TableCell>{futuro.form_1s} </TableCell>
                </TableRow>
                  <TableRow hover>
                  <TableCell component='th' scope="row">{formLabels.ss}</TableCell>
                  <TableCell>{presente.form_2s} </TableCell>
                    <TableCell>{preterito.form_2s} </TableCell>
                    <TableCell>{imperfecto.form_2s} </TableCell>
                    <TableCell>{condicional.form_2s} </TableCell>
                    <TableCell>{futuro.form_2s} </TableCell>
                </TableRow>
                  <TableRow hover>
                  <TableCell component='th' scope="row">{formLabels.ts}</TableCell>
                  <TableCell>{presente.form_3s} </TableCell>
                  <TableCell>{preterito.form_3s} </TableCell>
                  <TableCell>{imperfecto.form_3s} </TableCell>
                  <TableCell>{condicional.form_3s} </TableCell>
                  <TableCell>{futuro.form_3s} </TableCell>
                </TableRow>
                  <TableRow hover>
                  <TableCell  component='th' scope="row">{formLabels.fp}</TableCell>
                  <TableCell>{presente.form_1p} </TableCell>
                  <TableCell>{preterito.form_1p} </TableCell>
                  <TableCell>{imperfecto.form_1p} </TableCell>
                  <TableCell>{condicional.form_1p} </TableCell>
                  <TableCell>{futuro.form_1p} </TableCell>
                </TableRow>
                  <TableRow hover>
                  <TableCell component='th' scope="row">{formLabels.sp}</TableCell>
                  <TableCell>{presente.form_2p} </TableCell>
                  <TableCell>{preterito.form_2p} </TableCell>
                  <TableCell>{imperfecto.form_2p} </TableCell>
                  <TableCell>{condicional.form_2p} </TableCell>
                  <TableCell>{futuro.form_2p} </TableCell>
                </TableRow>
                <TableRow hover>
                  <TableCell component='th' scope="row">{formLabels.tp}</TableCell>
                  <TableCell>{presente.form_3p} </TableCell>
                  <TableCell>{preterito.form_3p} </TableCell>
                  <TableCell>{imperfecto.form_3p} </TableCell>
                  <TableCell>{condicional.form_3p} </TableCell>
                  <TableCell>{futuro.form_3p} </TableCell>
                </TableRow>
                </TableBody>
            </Table>
    )

};

export default IndicativoTable;