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
  IS_IN_THE_RANGE: 'is_in_the_range',
  INCLUDES: 'includes',
  DOES_NOT_INCLUDE: 'does_not_include'
}

const ONE_WAY_CATEGORY = [OPERATIONS.IS, OPERATIONS.IS_GREATER_THAN];
const TWO_WAY_CATEGORY = [OPERATIONS.IS_IN_THE_RANGE];
const DROPDOWN_CATEGORY = [OPERATIONS.INCLUDES, OPERATIONS.INCLUDES]

const INPUT_OPERATIONS = [
  {
    operation: '',
    label: '--',
  },
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

const DROPDOWN_OPERATIONS = [
  {
    operation: '',
    label: '--',
  },
  {
    operation: OPERATIONS.INCLUDES,
    label: 'includes',
  },
  {
    operation: OPERATIONS.DOES_NOT_INCLUDE,
    label: 'does not include',
  }
]

export {
  ONE_WAY,
  TWO_WAY,
  OPERATIONS,
  INPUT_OPERATIONS,
  ONE_WAY_CATEGORY,
  TWO_WAY_CATEGORY,
  DROPDOWN_CATEGORY,
  DROPDOWN_OPERATIONS,
  FORM_BUILDER_TYPE_MAPPING
}