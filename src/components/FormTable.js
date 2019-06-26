import React from "react";
import { getForm } from "../utils/utils";
import { tenseLabels } from "../constants";

const IndicativoTable = ({ data }) => {
  const orderedForms = [
    getForm(data, "form_1s"),
    getForm(data, "form_2s"),
    getForm(data, "form_3s"),
    getForm(data, "form_1p"),
    getForm(data, "form_2p"),
    getForm(data, "form_3p")
  ];

  return (
    <table padding="dense">
      <thead>
        <tr>
          <td scope="col">Form</td>
          <td>{tenseLabels.presente}</td>
        </tr>
      </thead>
      <tbody>
        {orderedForms.map(form => {
          return (
            <tr>
              <th scope="row">{form.label}</th>
              <td>
                {form.presente}
                <input type="text" />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default IndicativoTable;
