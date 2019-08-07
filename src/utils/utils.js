import { formMap, formLabels } from "../constants";
import removeAccents from "remove-accents";

export const getTense = (data, tense) => {
  const tenseData = data.filter(obj => obj.tense === tense)[0];

  // normalise the data to contain only relevant fields
  return {
    form_1s: tenseData.form_1s,
    form_2s: tenseData.form_2s,
    form_3s: tenseData.form_3s,
    form_1p: tenseData.form_1p,
    form_2p: tenseData.form_2p,
    form_3p: tenseData.form_3p
  };
};

export const getMood = (data, mood) => {
  return data.filter(item => {
    return item.mood === mood;
  });
};

export const merge = objects => {
  let out = {};

  for (let i = 0; i < objects.length; i++) {
    for (let p in objects[i]) {
      out[p] = objects[i][p];
    }
  }

  return out;
};

const getFormLabel = form => {
  return formLabels[formMap[form]];
};

export const getForm = (data, form) => {
  const formData = data.map(obj => {
    return {
      [removeAccents(obj.tense.toLowerCase())]: obj[form]
    };
  });

  let mergedData = merge(formData);
  mergedData.label = getFormLabel(form);
  return mergedData;
};

export const latinize = string => {
  return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

export const isLatinMatch = (userStr, actualStr) => {
  return latinize(userStr).toLowerCase() === latinize(actualStr).toLowerCase();
};

export const matchType = (userString, actualString) => {
  return userString === actualString
    ? "full"
    : isLatinMatch(userString, actualString)
    ? "partial"
    : "none";
};
