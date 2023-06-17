import Component from '@glimmer/component';

import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class UiComponentsSliderAccordionAccordionItemComponent extends Component {
  @tracked isCollapsed = false;

  @action
  toggleAccordion() {
    this.isCollapsed = !this.isCollapsed;
  }
}
