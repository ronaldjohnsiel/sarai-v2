import { Meteor } from 'meteor/meteor';
import { Weather } from '../weather.js';

Meteor.publish('weather', function() {
  return Weather.find();
});
