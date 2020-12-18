/* globals dayjs */
import { helper } from '@ember/component/helper';

export default helper(function dayjsAdd(params /*, hash*/) {
  return dayjs(params[0]).add(params[1], params[2]);
});
