import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import needed templates
// import '../../ui/layouts/body/body.js';
import '../../ui/pages/not-found/not-found.js';

// MAIN LAYOUT
import '../../ui/layouts/main/main-layout.js';

//CMS LAYOUT
import '../../ui/layouts/cms/cms-layout.js';

// PAGES
import '../../ui/pages/home/home.js';
import '../../ui/pages/about/about.js';
import '../../ui/pages/cms/cms.js';
import '../../ui/pages/cms/cms-home/cms-home.js';
import '../../ui/pages/cms/about-us/about-us.js';
import '../../ui/pages/cms/services/services.js';
import '../../ui/pages/cms/main/main.js';
import '../../ui/pages/cms/weather/weather.js';
import '../../ui/pages/cms/main/header-options.js';

// Set up all routes in the app
// HOMEPAGE
FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('MainLayout', { main: 'Home' });
  },
});

// ABOUT
FlowRouter.route('/about', {
  name: 'about',
  action() {
    BlazeLayout.render('MainLayout', { main: 'About' });
  },
});

FlowRouter.route('/admin', {
  name: 'admin.home',
  action() {
    BlazeLayout.render('CMSLayout', { main: 'CMSHome' });
  },
});
FlowRouter.route('/admin/main', {
  name: 'admin.main',
  action() {
    BlazeLayout.render('CMSLayout', { main: 'CMSMain' });
  },
});
FlowRouter.route('/admin/main-header', {
  name: 'admin.main-header',
  action() {
    BlazeLayout.render('CMSLayout', { main: 'HeaderOptions' });
  },
});
FlowRouter.route('/admin/about-us', {
  name: 'admin.about-us',
  action() {
    BlazeLayout.render('CMSLayout', { main: 'CMSAboutUs' });
  },
});
FlowRouter.route('/admin/services', {
  name: 'admin.services',
  action() {
    BlazeLayout.render('CMSLayout', { main: 'CMSServices' });
  },
});
FlowRouter.route("/admin/services/:_id", {
  name: 'services',
  //triggersEnter: [ isAdminRedirect ],
  action: (params, queryParams) => {
    BlazeLayout.reset();
    BlazeLayout.render("CMSLayout", {main: "CMSServicesForm"});
  }
});
FlowRouter.route('/admin/weather', {
  name: 'admin.weather',
  action() {
    BlazeLayout.render('CMSLayout', { main: 'CMSWeather' });
  },
});
// 404
FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  },
};