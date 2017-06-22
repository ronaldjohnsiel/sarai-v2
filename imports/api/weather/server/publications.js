import { Meteor } from 'meteor/meteor';
import { Weather } from '../weather.js';
import { DSSSettings } from '../sarai-dss-settings.js';
import { WeatherData } from '../sarai-weather-data.js';
import { HeatMapData } from '../sarai-heat-map-data.js';
import { WeatherStations } from '../sarai-weather-stations.js';

<<<<<<< 8dec776492af03e33108d8f2e7bf9a2dec6dd8c0
Meteor.publish('weather_stations', function() {
  return WeatherStations.find();
});
=======

Meteor.publish('weather_stations', function() {
  return WeatherStations.find();
});

>>>>>>> updated fixtures
Meteor.publish('weather', function() {
  return Weather.find();
});

Meteor.publish('weather_data', function() {
  return WeatherData.find();
});

Meteor.publish('dss_settings', function() {
  return DSSSettings.find();
});

Meteor.publish('heat_map_data', function() {
  return HeatMapData.find();
});

<<<<<<< 8dec776492af03e33108d8f2e7bf9a2dec6dd8c0
Meteor.publish('weather-data-30', () => {
  const oneMonthAgo = new Date()

  let reverseOffset = oneMonthAgo.getDate() - 31

  if (reverseOffset > 32 || reverseOffset < -32) {
    const reverseOffset = -(31 - oneMonthAgo.getDate())
  }

  oneMonthAgo.setDate(reverseOffset)

  return WeatherData.find({dateUTC: { $gt: oneMonthAgo}}, {sort: {dateUTC: -1}});
});

Meteor.publish('weather-data-30-by-id', (stationID) => {
  const oneMonthAgo = new Date()

  let reverseOffset = oneMonthAgo.getDate() - 31

  if (reverseOffset > 32 || reverseOffset < -32) {
    const reverseOffset = -(31 - oneMonthAgo.getDate())
  }

  oneMonthAgo.setDate(reverseOffset)

  return WeatherData.find({id: stationID, dateUTC: { $gt: oneMonthAgo}}, {sort: {dateUTC: -1}});
});
=======
>>>>>>> updated fixtures
