import Component from '@glimmer/component';

import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { formSchemaBuilder } from 'ember-filter/utils/schema-builder';

export default class UiComponentsFilterComponent extends Component {
  
  @tracked modelSchema = {};
  get resetLabel() {
    return this.args.resetLabel || 'Clear';
  }

  get headerTitle() {
    return this.args.headerTitle || 'Filters';
  }

  get applyLabel() {
    return this.args.applyLabel || 'Done';
  }

  get formSchema() {
    return formSchemaBuilder(this.args.formFields);
  }


  @action
  resetFilters() { }

  @action
  applyFilters() {
    console.log(this.modelSchema);
   }
}
