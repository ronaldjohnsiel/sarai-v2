import { Links } from '/imports/api/links/links.js';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base'

import './cms-navbar.html';


Accounts.config({
  forbidClientAccountCreation: true,
});