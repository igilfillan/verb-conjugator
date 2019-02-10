import React from 'react';

const ConjugationTable = ( {data} ) => {

   const getTense = (tense) => {
        return data.find( (obj) => {
            return obj.tense === tense;
        });
    };

   console.log('data', data);
    const presente = getTense('Presente');
    const preterito = getTense('Pretérito');
    const imperfecto = getTense('Imperfecto');
    const condicional = getTense('Condicional');
    const futuro = getTense('Futuro');

    return (
            <table>
                <thead>
                <tr>
                    <th>
                        <h2>Present</h2>
                    </th>
                    <th>
                        <h2>Preterito</h2>
                    </th>
                    <th>
                        <h2>Imperfecto</h2>
                    </th>
                    <th>
                        <h2>Condicional</h2>
                    </th>
                    <th>
                        <h2>Futuro</h2>
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{presente.form_1s}</td>
                    <td>{preterito.form_1s} </td>
                    <td>{imperfecto.form_1s} </td>
                    <td>{condicional.form_1s} </td>
                    <td>{futuro.form_1s} </td>
                </tr>
                <tr>
                    <td>{presente.form_2s} </td>
                    <td>{preterito.form_2s} </td>
                    <td>{imperfecto.form_2s} </td>
                    <td>{condicional.form_2s} </td>
                    <td>{futuro.form_2s} </td>
                </tr>
                <tr>
                    <td>{presente.form_3s} </td>
                    <td>{preterito.form_3s} </td>
                    <td>{imperfecto.form_3s} </td>
                    <td>{condicional.form_3s} </td>
                    <td>{futuro.form_3s} </td>
                </tr>
                <tr>
                    <td>{presente.form_1p} </td>
                    <td>{preterito.form_1p} </td>
                    <td>{imperfecto.form_1p} </td>
                    <td>{condicional.form_1p} </td>
                    <td>{futuro.form_1p} </td>
                </tr>
                <tr>
                    <td>{presente.form_2p} </td>
                    <td>{preterito.form_2p} </td>
                    <td>{imperfecto.form_2p} </td>
                    <td>{condicional.form_2p} </td>
                    <td>{futuro.form_2p} </td>
                </tr>
                <tr>
                    <td>{presente.form_3p} </td>
                    <td>{preterito.form_3p} </td>
                    <td>{imperfecto.form_3p} </td>
                    <td>{condicional.form_3p} </td>
                    <td>{futuro.form_3p} </td>
                </tr>
                </tbody>
            </table>

    )

};

export default ConjugationTable;