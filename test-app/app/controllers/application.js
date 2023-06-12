import { inject as service } from '@ember/service';
import Controller from '@ember/controller';

export default class ApplicationController extends Controller {
  @service dayjs;

  constructor() {
    super(...arguments);

    this.dayjs.setLocale('tr');
  }
}
