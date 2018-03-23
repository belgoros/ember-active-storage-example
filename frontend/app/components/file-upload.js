import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { get, set } from '@ember/object';
import { isPresent } from '@ember/utils';

export default Component.extend({
  activeStorage: service(),

  uploadProgress: 0,

  actions: {
    upload(event) {
      const files = event.target.files;
      if (isPresent(files)) {
        for (var i = 0; i < files.length; i++) {
          get(this, 'activeStorage').upload(files.item(i), '/rails/active_storage/direct_uploads', {
            onProgress: (progress) => {
              set(this, 'uploadProgress', progress);
            }
          }).then( (blob) => {
            get(this, 'onFileUploaded')(blob);
          });
        }
      }
    }
  }

});
