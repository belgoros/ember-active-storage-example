import Controller from '@ember/controller';

export default Controller.extend({

  actions: {
    async update() {
      let company = this.get('model');

      if (company.get('logo.signed_id')) {
        company.set('logo', company.get('logo.signed_id'));
      }

      await company.save();
      await this.transitionToRoute('companies');
    }
  }
});
