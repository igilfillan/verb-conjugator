import React from 'react';
import { getTense } from '../utils/utils';
import {formLabels, tenseLabels} from "../constants";

const SubjuntivoTable = ({data} ) => {

    const presente = getTense(data, 'Presente');
    const imperfecto = getTense(data, 'Imperfecto');
    const futuro = getTense(data, 'Futuro');

    return (
            <table>
                <thead>
                <tr>
                    <th>
                      {tenseLabels.presente}
                    </th>
                    <th>
                      {tenseLabels.imperfecto}
                    </th>
                    <th>
                      {tenseLabels.futuro}
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <th scope="row">{formLabels.fs}</th>
                    <td>{presente.form_1s}</td>
                    <td>{imperfecto.form_1s} </td>
                    <td>{futuro.form_1s} </td>
                </tr>
                <tr>
                  <th scope="row">{formLabels.ss}</th>
                    <td>{presente.form_2s} </td>
                    <td>{imperfecto.form_2s} </td>
                    <td>{futuro.form_2s} </td>
                </tr>
                <tr>
                  <th scope="row">{formLabels.ts}</th>
                    <td>{presente.form_3s} </td>
                    <td>{imperfecto.form_3s} </td>
                    <td>{futuro.form_3s} </td>
                </tr>
                <tr>
                  <th scope="row">{formLabels.fp}</th>
                    <td>{presente.form_1p} </td>
                    <td>{imperfecto.form_1p} </td>
                    <td>{futuro.form_1p} </td>
                </tr>
                <tr>
                  <th scope="row">{formLabels.sp}</th>
                    <td>{presente.form_2p} </td>
                    <td>{imperfecto.form_2p} </td>
                    <td>{futuro.form_2p} </td>
                </tr>
                <tr>
                  <th scope="row">{formLabels.tp}</th>
                    <td>{presente.form_3p} </td>
                    <td>{imperfecto.form_3p} </td>
                    <td>{futuro.form_3p} </td>
                </tr>
                </tbody>
            </table>

    )

};

export default SubjuntivoTable;