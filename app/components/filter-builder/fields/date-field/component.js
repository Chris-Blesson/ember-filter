import moment from 'moment';
import FilterBuilderComponent from '../../../filter-builder/component';

import { action } from '@ember/object';
import { DATE_OPERATIONS, DATE_MULTI_CATEGORY_CHOICES } from 'ember-filter/constants/form';

export default class FilterBuilderFieldsDateFieldComponent extends FilterBuilderComponent {

  dateFormat = 'YYYY-MM-DD';
  date = moment().format(this.dateFormat);
  multiCategoryChoices = DATE_MULTI_CATEGORY_CHOICES;
  multiLevelOption = DATE_MULTI_CATEGORY_CHOICES.firstObject.operation;

  
  get operations() {
    return DATE_OPERATIONS;
  }

  @action
  onDatesChange(dateObject, selectedDate, target) {
    this.updateFields({ target: target.element });
  }

}
