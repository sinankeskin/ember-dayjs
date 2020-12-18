/* globals dayjs */
import { helper } from '@ember/component/helper';

export default helper(function dayjsFormat(params /*, hash*/) {
  return dayjs(params[0]).format(params[1]);
});
