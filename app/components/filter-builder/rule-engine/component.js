import Component from '@glimmer/component';

import { tracked } from '@glimmer/tracking';
import { set, get, action } from '@ember/object';
import { ONE_WAY, TWO_WAY, TWO_WAY_CATEGORY } from 'ember-filter/constants/form';

export default class FilterBuilderRuleEngineComponent extends Component {

  @tracked currentOperation = this.selectedOption;

  get hasDefaultLevelTwo() {
    return this.levelTwoCategory;
  }


  get levelTwoCategory() {
    let levelTwoType = ONE_WAY;
    if (TWO_WAY_CATEGORY.includes(this.currentOperation)) {
      levelTwoType = TWO_WAY;
    }
    return levelTwoType;
  }

  _constructPropertyValue({ name, value }) {
    let type = this.levelTwoCategory;
    let objectValue = get(this.args.object, this.args.condition)
    switch (type) {
      case ONE_WAY:
        objectValue = { value, operation: this.currentOperation }
        break;
      case TWO_WAY:
        objectValue = objectValue || { value: {}, operation: this.currentOperation };
        objectValue.value[name] = value;
        break;
    }
    return objectValue;
  }

  @action
  updateFields(event) {
    let value = this._constructPropertyValue(event.target);
    set(this.args.object, this.args.condition, value);
    console.log(this.args.object);
  }

  @action
  updateCurrentOperation(event) {
    this.currentOperation = event.target.value;
    let previousValue = get(this.args.object, this.args.condition)
    this.levelTwoCategory === 'two-way' ? set(this.args.object, this.args.condition, null) : set(this.args.object, this.args.condition, { operation: this.currentOperation, value: previousValue?.value });
  }

  @action
  updateDependantFieldsToModel(value) {
    let parentValue = get(this.args.object, this.args.parent) || {};
    set(parentValue, 'dependencies', { [this.args.field.name]:value });
    set(this.args.object, this.args.parent, parentValue);
    console.log(this.args.object);
  }

}
