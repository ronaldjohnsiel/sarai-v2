import { Slides } from '/imports/api/slides/slides.js';
import { Meteor } from 'meteor/meteor';
import './carousel.html';

Template.Carousel.onCreated(function() {
  console.log('Creating Carousel');
  Meteor.subscribe('slides.all');
});

Template.Carousel.helpers({
  slides: function() {
    return Slides.find({});
  },
});