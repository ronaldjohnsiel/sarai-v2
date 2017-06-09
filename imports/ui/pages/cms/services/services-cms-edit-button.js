import './services-cms-edit-button.html'

Template.CMSServicesEditButton.onRendered(() => {

})

Template.CMSServicesEditButton.events({

  'click .cms-service-edit': (event, template) => {
    Session.set('serviceAction', 'edit');

    FlowRouter.go(`/admin/services/${template.data.id}`);
    console.log("WEW");
  }

});

Template.CMSServicesEditButton.helpers({
  edit: () => {
    // console.log('Clicked edit button')
    // console.log(template.data.id)
  }

});