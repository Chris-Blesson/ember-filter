import moment from 'moment';
import FilterBuilderComponent from '../../../filter-builder/component';

import { action } from '@ember/object';
import { INPUT_OPERATIONS } from 'ember-filter/constants/form';

export default class FilterBuilderFieldsDateFieldComponent extends FilterBuilderComponent {

  dateFormat = 'YYYY-MM-DD';
  date = moment().format(this.dateFormat);

  
  get operations() {
    return INPUT_OPERATIONS;
  }

  @action
  onDatesChange(dateObject, selectedDate, target) {
    this.updateFields({ target: target.element });
  }

}
