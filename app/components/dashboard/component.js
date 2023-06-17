import Component from '@glimmer/component';

import { FORM_FIELDS } from 'ember-filter/constants/filter';

export default class DashboardComponent extends Component {

  get formFields() {
    // Ideally an API call will be made in the real-world usecase and the fields will be returned. Returning a constant for this assignment.
    return FORM_FIELDS;
  }
}
