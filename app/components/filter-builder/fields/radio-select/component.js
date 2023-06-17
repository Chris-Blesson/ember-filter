import Component from '@glimmer/component';
import FilterBuilderRuleEngineComponent from '../../rule-engine/component';

import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
export default class FilterBuilderFieldsRadioSelectComponent extends FilterBuilderRuleEngineComponent {

  @tracked radioSelection;
  
  @action
  radioToggle(event) {
    this.radioSelection = event.target.name;
    if (this.args.isDependant) {
      this.updateDependantFieldsToModel(this.radioSelection);
    }
  }
}
