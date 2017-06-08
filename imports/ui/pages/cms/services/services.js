import './services.html'

Template.CMSServices.onCreated(() => {
  Meteor.subscribe('services')
});

Template.CMSServices.helpers({
  services: () => {
    const records = Services.find({}).fetch()

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