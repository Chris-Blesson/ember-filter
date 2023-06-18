import Component from '@glimmer/component';

import { INPUT_OPERATIONS } from 'ember-filter/constants/form';
export default class FilterBuilderFieldsNumberFieldComponent extends Component {
  
  get operations() {
    return INPUT_OPERATIONS;
  }


}
