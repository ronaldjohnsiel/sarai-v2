import './header-options.html';

import { Meteor } from 'meteor/meteor';
import { Links } from '../../../../api/links/links.js';

Template.HeaderOptions.onCreated(() => {
  Meteor.subscribe('links')
});

Template.HeaderOptions.helpers({

  icon: () => {
    const record = Links.findOne({title: 'mainHeader'})

    return record && record.img
  },

  links: () => {
    const record = Links.findOne({title: 'mainHeader'})
  
    return record && record.links
  },

  buttonEnabled: () => {
    const record = Links.findOne({title: 'mainHeader'})

    return record && record.buttonEnabled
  },

  linkAction: () => {
    return Session.get('linkAction')
  },

  myCallbacks: () => {
    return {
      formData: () => {
        return {
          filename: `head-logo-${Random.id()}`,
          uploadGroup: 'main'
        }
      },
      finished: (index, fileInfo, context) => {
        this.uploadedFile = `${uploadDirPrefix()}${fileInfo.path}`

        Meteor.call('cms-header-icon-update', `${uploadDirPrefix()}${fileInfo.path}`, (error, result) => {
          let toast = 'File uploaded successfully'
          if (error) {
            toast = 'Unable to upload file'
          }
          showToast(toast)
        })
      }
    }
  }
});