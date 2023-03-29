import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | dayjs', function(hooks) {
  setupRenderingTest(hooks);

  test('format a date', async function(assert) {
    this.set('value', '2001-10-31T08:24:56');

    await render(hbs`{{utc this.value}}`);

    assert.equal(this.element.textContent.trim(), 'Wed, 31 Oct 2001 08:24:56 GMT');
  });
});
