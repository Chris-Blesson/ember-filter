import Component from '@glimmer/component';

import { tracked } from '@glimmer/tracking';
import { set, get, action } from '@ember/object';
import { ONE_WAY, TWO_WAY, TWO_WAY_CATEGORY, MULTI_LEVEL_CATEGORY } from 'ember-filter/constants/form';

export default class FilterBuilderComponent extends Component {

  @tracked currentOperation = this.selectedOption;


  get hasDefaultLevelTwo() {
    return this.levelTwoCategory;
  }

  get isValidOperation() {
    return this.currentOperation !== '--';
  }

  get hasMultiLevelCategory(){
    return MULTI_LEVEL_CATEGORY.includes(this.currentOperation);
  }

  get levelTwoCategory() {
    let levelTwoType = ONE_WAY;
    if (TWO_WAY_CATEGORY.includes(this.currentOperation || this.args.currentOperation)) {
      levelTwoType = TWO_WAY;
    }
    return levelTwoType;
  }

  /**
   * Extracts the fields configs from modelSchema
   * @param {Object} modelSchema - Model Schema were filter updates are being tracked
   * @param {*} fieldName - Field Name from the list of fields
   * @return {Object} - returns hash of the particular field 
  */
  _previousState(modelSchema, fieldName) {
    return get(modelSchema, fieldName);
  }

  /**
   * Constructs value to be updated and filter values are updated
   * @param {String} { name } - Field that was updated
   * @param {String} { value } - Value that was updated
   * @return {Object} Updated hash with the latest value 
  */
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
    if (this.levelTwoCategory !== ONE_WAY || this.hasMultiLevelCategory) {
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
