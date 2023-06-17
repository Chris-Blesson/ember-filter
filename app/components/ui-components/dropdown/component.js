import Component from '@glimmer/component';

export default class UiComponentsDropdownComponent extends Component {
  fieldID = this.args.dropdownId || 'ui-component-dropdown';
}
