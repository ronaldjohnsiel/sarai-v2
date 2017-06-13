import './services.html'

import { Meteor } from 'meteor/meteor';
import { Projects } from '../../../../api/projects/projects.js';
import './services-cms-edit-button.html'
import './services-cms-delete-button.html'


Template.CMSServices.onCreated(() => {
  Meteor.subscribe('projects')
});

Template.CMSServices.helpers({
  services: () => {
    const records = Projects.find({}).fetch();

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

  'click .cms-service-edit': () => {

  },

  'click #cms-service-add': () => {
    Session.set('serviceAction', 'add')
    FlowRouter.go('/admin/services/add')
  }
});