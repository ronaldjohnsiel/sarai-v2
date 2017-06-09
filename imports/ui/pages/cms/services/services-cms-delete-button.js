import './services-cms-delete-button.html'
import { Session } from 'meteor/session';


Template.CMSServicesDeleteButton.events({
  'click .cms-service-delete': (event, template) => {

    Meteor.call('cms-delete-image', template.data.service.thumbnail)

    Meteor.call('cms-service-delete', template.data.service._id, (error, results) => {

      if (!error) {
        showToast('Successfully deleted service')
      } else {
        showToast('Unable to delete service')
      }
    })
  }
})