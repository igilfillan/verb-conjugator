import React from 'react';
import { formLabels } from '../constants';
import { getTense } from '../utils/utils';

const ImperativoTable = ({afirmativo, negativo} ) => {

    const afirmativoPresente = getTense(afirmativo, 'Presente');
    const negativoPresente = getTense(negativo, 'Presente');

    return (
            <table>
                <thead>
                <tr>
                  <th scope="col">
                      Form
                  </th>
                    <th scope="col">
                        Afirmative
                    </th>
                    <th scope="col">
                        Negativo
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <th scope="row">{formLabels.fs}</th>
                    <td>--</td>
                    <td>--</td>
                </tr>
                <tr>
                  <th scope="row">{formLabels.ss}</th>
                  <td>{afirmativoPresente.form_2s} </td>
                    <td>{negativoPresente.form_2s} </td>
                </tr>
                <tr>
                  <th scope="row">{formLabels.ts}</th>
                  <td>{afirmativoPresente.form_3s} </td>
                    <td>{negativoPresente.form_3s} </td>
                </tr>
                <tr>
                  <th scope="row">{formLabels.fp}</th>

                  <td>{afirmativoPresente.form_1p} </td>
                    <td>{negativoPresente.form_1p} </td>
                </tr>
                <tr>
                  <th scope="row">{formLabels.sp}</th>

                  <td>{afirmativoPresente.form_2p} </td>
                    <td>{negativoPresente.form_2p} </td>
                </tr>
                <tr>
                  <th scope="row">{formLabels.fs}</th>

                  <td>{afirmativoPresente.form_3p} </td>
                    <td>{negativoPresente.form_3p} </td>
                </tr>
                </tbody>
            </table>

    )

};

export default ImperativoTable;