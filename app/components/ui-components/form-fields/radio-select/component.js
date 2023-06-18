import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
export default class UiComponentsFormFieldsRadioSelectComponent extends Component {

  @tracked radioSelection;

  @action
  radioToggle(event) {
    this.radioSelection = event.target.name;
    if (this.args.updateCallback) {
      this.args.updateCallback(this.radioSelection, this.args);
    }
  }
}




