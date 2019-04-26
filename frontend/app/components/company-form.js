import Component from '@ember/component';

export default Component.extend({
  tagName: '',

  actions: {
    setCompanyLogo(blob) {
      this.set('company.logo', blob.get('signedId'));
    },

    saveCompany() {
      this.submitAction();
    }
  }
});
