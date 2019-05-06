import Controller from '@ember/controller';

export default Controller.extend({

  actions: {
    async save() {
      let company = this.get('model');
      await company.save();
      await this.transitionToRoute('companies');
    }
  }
});
