import Controller from '@ember/controller';
import { get } from '@ember/object';
import { debug } from '@ember/debug';

export default Controller.extend({

  actions: {
    setCompanyLogo(blob) {
      // TODO: set signedId into company model
      debug(get(blob, 'signedId'));
    }
  }
});
