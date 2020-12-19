import Helper from '@ember/component/helper';
import { inject as service } from '@ember/service';

export default class BaseHelper extends Helper {
  @service
  dayjs;
}
