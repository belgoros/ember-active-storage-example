import Controller from '@ember/controller';

export default Controller.extend({

  actions: {
    async update() {
      let company = this.get('model');

      // Needs to be set up explicitely to avoid the logo to have a hash
      // of url and signed_id
      if (company.get('logo.signed_id')) {
        company.set('logo', company.get('logo.signed_id'));
      }

      await company.save();
      await this.transitionToRoute('companies');
    }
  }
});
