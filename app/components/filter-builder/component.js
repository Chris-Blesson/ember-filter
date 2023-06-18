import Component from '@glimmer/component';

import { tracked } from '@glimmer/tracking';
import { set, get, action } from '@ember/object';
import { ONE_WAY, TWO_WAY, TWO_WAY_CATEGORY } from 'ember-filter/constants/form';

export default class FilterBuilderComponent extends Component {

  @tracked currentOperation = this.selectedOption;

  get hasDefaultLevelTwo() {
    return this.levelTwoCategory;
  }

  get levelTwoCategory() {
    let levelTwoType = ONE_WAY;
    if (TWO_WAY_CATEGORY.includes(this.currentOperation || this.args.currentOperation)) {
      levelTwoType = TWO_WAY;
    }
    return levelTwoType;
  }

  _previousState(modelSchema, fieldName) {
    return get(modelSchema, fieldName);
  }

  _constructPropertyValue({ name, value }) {
    let { object, condition } = this.args;
    let existingHash = this._previousState(object, condition) || { value: {} };
    if (name) {
      existingHash.value[name] = value;
    }
    else {
      existingHash.value = value
    }
    return existingHash;
  }

  @action
  updateFields(event) {
    let value = this._constructPropertyValue(event.target);
    set(this.args.object, this.args.condition, value);
  }

  @action
  updateCurrentOperation(event) {
    let { object, condition } = this.args;
    this.currentOperation = event.target.value;
    let existingHash = this._previousState(object, condition) || { value: {} };
    if (this.levelTwoCategory === TWO_WAY) {
      existingHash.value = {};
    }
    existingHash.operation = this.currentOperation;
    set(object, condition, existingHash)
  }

  @action
  updateDependantFieldsToModel(value, params) {
    let { parent, field } = params;
    let parentValue = this._previousState(this.args.modelSchema, parent) || {};
    set(parentValue, 'dependencies', { [field.name]: value });
    set(this.args.modelSchema, parent, parentValue);
  }

  @action
  fieldStateUpdate(fieldName, state) {
    if (!state) {
      delete this.args.modelSchema[fieldName];
    }
  }

}
