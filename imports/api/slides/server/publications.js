// All slides-related publications

import { Meteor } from 'meteor/meteor';
import { Slides } from '../slides.js';

Meteor.publish('slides', function() {
  return Slides.find();
});