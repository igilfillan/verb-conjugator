export const getTense = (data, tense) => {

  const tenseData = data.filter( obj => obj.tense === tense)[0];

  // normalise the data to contain only relevant fields
  return {
    "form_1s": tenseData.form_1s,
    "form_2s": tenseData.form_2s,
    "form_3s": tenseData.form_3s,
    "form_1p": tenseData.form_1p,
    "form_2p": tenseData.form_2p,
    "form_3p": tenseData.form_3p
  };
};

export const getMood = (data, mood) => {
  return data.filter( (item) => {
    return item.mood === mood;
  });
};

export const getForm = (data, form) => {
  console.log('data', data);

  console.log('form', form);

  const formData = data.map( (obj) => {

    return {
      [obj.tense]: obj[form]
    }


  });

  console.log('formData', formData);
  console.log('formData flat', formData.flat());


  //
  // return {
  //   form: form,
  //   presente: 'blah',
  //   preterito: 'blahe'
  // }
};