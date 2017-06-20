import { Meteor } from 'meteor/meteor';
import { Story } from '../main.js';

Meteor.publish('main', function() {
  return Main.find();
});
