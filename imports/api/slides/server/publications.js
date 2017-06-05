// All slides-related publications

import { Meteor } from 'meteor/meteor';
import { Slides } from '../slides.js';

Meteor.publish('slides.all', function() {
  return Slides.find();
});