import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    destroyCompany(company) {
      company.destroyRecord();
      this.transitionToRoute('companies');
    }
  }
});
