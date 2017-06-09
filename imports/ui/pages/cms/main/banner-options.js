import './banner-options.html';

import { Meteor } from 'meteor/meteor';
import { Slides } from '../../../../api/slides/slides.js';

Template.BannerOptions.onCreated(() => {
  Meteor.subscribe('slides');
})

Template.BannerOptions.helpers({
  truncateTableEntry: (text) => {

    if (text.length > 20) {
      return `${text.substring(0, 20)}...`
    } else {
      return text
    }
  },

  dialogHeader: () => {
    console.log(`This.action: ${this.action}`)
    if (this.action == 'add') {
      return 'Add Slide'
    } else if (this.action == 'edit') {
      return 'Edit Slide'
    }
  },

  slides: () => {
    const record = Slides.findOne({name: 'banner'})

    if (record) {
      //order by rank
      let orderedSlides = record.slides


      if (this.bannerOrder == 'ascending') {
        orderedSlides = orderedSlides.sort((a, b) => {
          if (a.rank < b.rank) {
            return -1
          } else if (a.rank > b.rank) {
            return 1
          } else {
            return 0
          }
        })
      } else if (this.bannerOrder == 'descending') {
        orderedSlides = orderedSlides.sort((a, b) => {
          if (a.rank < b.rank) {
            return 1
          } else if (a.rank > b.rank) {
            return -1
          } else {
            return 0
          }
        })
      }

      return orderedSlides
    }

  },

  positionLeft: () => {

    return 'checked'
  },

  myCallbacks: () => {
    return {
      formData: () => {
        // if (this.action == 'add') {
        return {
          filename: `slider-${Random.id()}`,
          uploadGroup: 'main'
        }
        // }

        // else if (this.action == 'edit') {
        //   return {
        //     filename: `slider-${this.actionID}`,
        //     uploadGroup: 'main'
        //   }
        // }

      },
      finished: (index, fileInfo, context) => {
        this.uploadedFile = `${uploadDirPrefix()}${fileInfo.path}`

        //console.log(`saved to ${this.uploadedFile}`)
        $('#cms-banner-slide-img').attr('src', `${uploadDirPrefix()}${fileInfo.path}`)

      }
    }
  },

  dialogClasses: () => {
    return {
      class: "mdl-cell mdl-cell--12-col"
    }
  }
});