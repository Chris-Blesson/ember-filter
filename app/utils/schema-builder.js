import { FORM_BUILDER_TYPE_MAPPING } from 'ember-filter/constants/form';

export const formSchemaBuilder = (formFields) => {

  return formFields.map(field => {
    let { label, name, choices, type, isEditable, isDefault, dependantFields } = field;
    if (dependantFields) {
      dependantFields = formSchemaBuilder(dependantFields);
    }
    return {
      name,
      label,
      choices,
      isDefault,
      isEditable,
      dependantFields,
      inputType: FORM_BUILDER_TYPE_MAPPING[type]
    }
  });

}