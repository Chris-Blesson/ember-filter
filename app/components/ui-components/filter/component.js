import Component from '@glimmer/component';

import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { formSchemaBuilder } from 'ember-filter/utils/schema-builder';

export default class UiComponentsFilterComponent extends Component {

  @service router;

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

  get queryHash() {
    let hash = [];
    for (let key in this.modelSchema) {
      let { operation, value, dependencies } = this.modelSchema[key];
      dependencies = dependencies || {};
      hash.push({ condition: key, operation, value, dependencies});
    }
    return hash;
  }


  @action
  resetFilters() { }

  @action
  applyFilters() {
    let queryHash = JSON.stringify(this.queryHash);
    queryHash = new URLSearchParams(queryHash).toString();
    console.log('Query Hash', queryHash);
    this.router.transitionTo('dashboard', { queryParams: { queryHash } })
  }
}
