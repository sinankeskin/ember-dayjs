/* globals dayjs */
import { helper } from '@ember/component/helper';

export default helper(function dayjsFromNow(params /*, hash*/) {
  dayjs.extend(window.dayjs_plugin_relativeTime);

  return dayjs(params[0]).fromNow(params[1] || false);
});
