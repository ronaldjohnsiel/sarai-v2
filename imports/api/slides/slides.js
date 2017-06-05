// Definition of the slides collection
// Used for the carousel on the main page

import { Mongo } from 'meteor/mongo';

export const Slides = new Mongo.Collection('slides');
