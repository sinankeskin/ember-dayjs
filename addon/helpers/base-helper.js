import Helper from '@ember/component/helper';
import { run } from '@ember/runloop';
import { inject as service } from '@ember/service';

export default class BaseHelper extends Helper {
  @service
  dayjs;

  compute(_params, hash = {}) {
    this.clearTimer();

    if (hash.interval) {
      this.intervalTimer = setTimeout(() => {
        run(() => this.recompute());
      }, parseInt(hash.interval, 10));
    }
  }

  clearTimer() {
    clearTimeout(this.intervalTimer);
  }
}
