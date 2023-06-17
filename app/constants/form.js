const ONE_WAY = 'one-way';
const TWO_WAY = 'two-way';

const FORM_BUILDER_TYPE_MAPPING = {
  date: 'date-field',
  string: 'input-field',
  integer: 'number-field',
  lookup: 'autocomplete-field',
  dropdown: 'multi-select-dropdown-field',
  boolean: 'radio-select'
}

const OPERATIONS = {
  IS: 'is',
  IS_GREATER_THAN: 'is_greater_than',
  IS_IN_THE_RANGE: 'is_in_the_range'
}

const ONE_WAY_CATEGORY = [OPERATIONS.IS, OPERATIONS.IS_GREATER_THAN];
const TWO_WAY_CATEGORY = [OPERATIONS.IS_IN_THE_RANGE];

const INPUT_OPERATIONS = [
  {
    operation: OPERATIONS.IS,
    label: 'is equal to',
  },
  {
    operation: OPERATIONS.IS_GREATER_THAN,
    label: 'is greater than',
  },
  {
    operation: OPERATIONS.IS_IN_THE_RANGE,
    label: 'is between',
  }
]

export {
  ONE_WAY,
  TWO_WAY,
  OPERATIONS,
  INPUT_OPERATIONS,
  ONE_WAY_CATEGORY,
  TWO_WAY_CATEGORY,
  FORM_BUILDER_TYPE_MAPPING
}