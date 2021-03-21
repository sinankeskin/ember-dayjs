import UtcHelper from './utc';

export default class Local extends UtcHelper {
  compute(params, hash) {
    super.compute(params, hash);

    return super.compute(params).local();
  }
}
