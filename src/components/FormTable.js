import React, { useState } from "react";
import { getForm } from "../utils/utils";
import { tenseLabels } from "../constants";
import cn from "classnames";
import "./formtable.css";

const FormCell = props => {
  const [presente, setPresente] = useState("");
  const [isMatched, setMatch] = useState("");

  const isMatching = (currentInput, actual) => {
    console.log(currentInput === actual);
  };

  return (
    <td className={cn({ isCorrect: presente === props.data }, props.className)}>
      {props.data}

      <input
        type="text"
        name={props.data}
        value={presente}
        onChange={e => {
          isMatching(e.target.value, props.data);
          setPresente(e.target.value);
        }}
      />
    </td>
  );
};

const FormTable = ({ data }) => {
  const orderedForms = [
    getForm(data, "form_1s"),
    getForm(data, "form_2s"),
    getForm(data, "form_3s"),
    getForm(data, " form_1p"),
    getForm(data, "form_2p"),
    getForm(data, "form_3p")
  ];

  return (
    <table padding="dense">
      <thead>
        <tr>
          <th scope="col">Form</th>
          <th>{tenseLabels.presente}</th>
          <th>{tenseLabels.preterito}</th>
          <th>{tenseLabels.imperfecto}</th>
          <th>{tenseLabels.condicional}</th>
          <th>{tenseLabels.futuro}</th>
        </tr>
      </thead>
      <tbody>
        {orderedForms.map(form => {
          return (
            <tr>
              <th scope="row">{form.label}</th>
              <FormCell className="inputCell" data={form.presente} />
              <FormCell className="inputCell" data={form.pretérito} />
              <FormCell className="inputCell" data={form.imperfecto} />
              <FormCell className="inputCell" data={form.condicional} />
              <FormCell className="inputCell" data={form.futuro} />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default FormTable;
