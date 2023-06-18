import FilterBuilderComponent from "../../component";
import { tracked } from '@glimmer/tracking';

export default class FilterBuilderControlsFilterFieldComponent extends FilterBuilderComponent {

  @tracked selectedOption = this.args.operations.firstObject.operation;

  optionIdPath = this.args.optionIdPath || 'operation';
  optionLabelPath = this.args.optionLabelPath || 'label';
  type = this.args.type || 'and';
  showIcon = this.args.showIcon === false ? this.args.showIcon : true;
}
