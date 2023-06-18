import FilterBuilderComponent from '../../../filter-builder/component';

import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { DROPDOWN_OPERATIONS } from 'ember-filter/constants/form';
export default class FilterBuilderFieldsMultiSelectDropdownFieldComponent extends FilterBuilderComponent {

  @tracked selection = [];
  get operations() {
    return DROPDOWN_OPERATIONS;
  }

  @action
  selectionHandler(values) {
    this.selection = values;
    this.updateFields({ target: { value: values.map(value => value.id) } });
  }
}
