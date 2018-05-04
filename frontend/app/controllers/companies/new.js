import Controller from '@ember/controller';
import { get, set } from '@ember/object';

export default Controller.extend({

  actions: {
    setCompanyLogo(blob) {
      set(get(this, 'model'), 'logo', get(blob, 'signedId'));
    },
    save() {
      get(this, 'model').save().then( () => this.transitionToRoute('companies'));
    }
  }
});
