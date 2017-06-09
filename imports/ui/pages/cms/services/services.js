import './services.html'

import { Session } from 'meteor/session';
import { Meteor } from 'meteor/meteor';
import { Services } from '../../../../api/services/services.js';
import './services-cms-edit-button.html'
import './services-cms-delete-button.html'


Template.CMSServices.onCreated(() => {
  Meteor.subscribe('services');
});

Template.CMSServices.helpers({
  services: () => {
    const records = Projects.find({}).fetch()

    if (records) {
      return records
    }
  },

  showToastIfAny: () => {
    if (Session.get('toast') != undefined) {
      console.log(Session.get('toast'))

      Session.set('toast', undefined)
    }
  }
});

Template.CMSServices.events({
  'click #cms-service-add': () => {
    Session.set('serviceAction', 'add');
    FlowRouter.go('/admin/services/add');
  }
});