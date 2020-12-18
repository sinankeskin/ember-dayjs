/* globals dayjs */
import { helper } from '@ember/component/helper';

export default helper(function utc(params /*, hash*/) {
  dayjs.extend(window.dayjs_plugin_utc);

  return dayjs.utc(params[0]).format(params[1]);
});
