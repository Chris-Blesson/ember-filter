import moment from 'moment';
import FilterBuilderRuleEngineComponent from '../../rule-engine/component';

import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { INPUT_OPERATIONS } from 'ember-filter/constants/form';

export default class FilterBuilderFieldsDateFieldComponent extends FilterBuilderRuleEngineComponent {

  dateFormat = 'YYYY-MM-DD';
  date = moment().format(this.dateFormat);
  @tracked selectedOption = INPUT_OPERATIONS[0].operation;

  get operations() {
    return INPUT_OPERATIONS;
  }

  @action
  onDatesChange(dateObject, selectedDate, target) {
    this.updateFields({ target: target.element });
  }

}
