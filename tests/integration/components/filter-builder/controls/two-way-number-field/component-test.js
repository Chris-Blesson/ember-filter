import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-filter/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | filter-builder/controls/two-way-number-field', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<FilterBuilder::Controls::TwoWayNumberField />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <FilterBuilder::Controls::TwoWayNumberField>
        template block text
      </FilterBuilder::Controls::TwoWayNumberField>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
