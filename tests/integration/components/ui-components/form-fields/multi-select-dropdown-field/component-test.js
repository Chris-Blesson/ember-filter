import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-filter/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | ui-components/form-fields/multi-select-dropdown-field', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<UiComponents::FormFields::MultiSelectDropdownField />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <UiComponents::FormFields::MultiSelectDropdownField>
        template block text
      </UiComponents::FormFields::MultiSelectDropdownField>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
