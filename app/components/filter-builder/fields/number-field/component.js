import FilterBuilderRuleEngineComponent from '../../rule-engine/component';

import { tracked } from '@glimmer/tracking';
import { INPUT_OPERATIONS } from 'ember-filter/constants/form';

export default class FilterBuilderFieldsNumberFieldComponent extends FilterBuilderRuleEngineComponent {

  @tracked selectedOption = INPUT_OPERATIONS[0].operation;

  
  get operations() {
    return INPUT_OPERATIONS;
  }


}
