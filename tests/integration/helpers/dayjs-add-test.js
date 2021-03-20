import { module, test } from 'qunit';

import { hbs } from 'ember-cli-htmlbars';
import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';

module('Integration | Helper | dayjs-add', function (hooks) {
  setupRenderingTest(hooks);

  // TODO: Replace this with your real tests.
  test('it renders', async function (assert) {
    this.set('inputValue', '1234');

    await render(hbs`{{dayjs-add this.inputValue}}`);

    assert.equal(this.element.textContent.trim(), 'Invalid Date');
  });
});
