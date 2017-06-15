import './about-us-leaders.html'

import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
import { About } from '../../../../api/about/about.js';

Template.CMSAboutUsLeaders.onCreated(() => {
  Meteor.subscribe('about')
});

Template.CMSAboutUsLeaders.onRendered(() => {
  $("#cms-about-us-leaders-title-div").addClass("is-dirty");
})

Template.CMSAboutUsLeaders.events({
  'click .cms-about-us-leaders-edit': (e) => {

    const id = e.currentTarget.id

    const index = id;
    const record = About.findOne({name: 'leaders'})
    let leaderName = ''
    let position = ''

    if (record) {
      leaderName = record.list[index].leaderName;
      position = record.list[index].position;
    }

    // const dialog = document.querySelector('#cms-header-dialog');;

    $('#cms-about-us-leader-name').addClass('is-dirty')
    $('#cms-banner-link-href').addClass('is-dirty')

    $('#cms-about-us-leader-name-input').val(leaderName)
    $('#cms-about-us-leader-position-input').val(position)
  },
  'click #cms-about-us-leaders-save': () => {
    const title = $("#cms-about-us-leaders-title").val()

    Meteor.call('cms-about-us-leaders-update', title, author1, subtext1, author2, subtext2, author3, subtext3, author4, subtext4, author5, subtext5, (error, result) => {
      let toast = 'Unable to save changes'
      if (error) { } else {
        toast = 'Saved changes to About Us Project Leaders'
      }

      showToast(toast)
    })
  }
})

Template.CMSAboutUsLeaders.helpers({

  leaders: () => {
    const record = About.findOne({name: 'leaders'});
    if(record){
      return record;
    }
  },

  title: () => {
    const record = About.findOne({name: 'leaders'});
    if(record){
      return record.title;
    }
  },

  attributes: () => {
    return {
      class: "class1 class2"
    }
  },

  // Callbacks

  save: () => {
    const title = $("#cms-about-us-leaders-title").val()

    Meteor.call('cms-about-us-leaders-update', title, author1, subtext1, author2, subtext2, author3, subtext3, author4, subtext4, author5, subtext5)
  }
})