require('dotenv').config();
const request = require('request');
const apiKey = process.env.GOOGLE_MAPS_API_KEY;

const sumroute = (loc, callback) => {
  const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(
    loc.origins
  )}&destinations=${encodeURIComponent(loc.destination)}&key=${apiKey}`;
  request({ url, json: true }, (err, { body } = {}) => {
    if (err) callback(`Could not connect to ${err.hostname}`, undefined);
    else {
      const base = body.rows[0].elements[0];
      callback(undefined, {
        base: body.rows[0].elements[0],
        timeText: base.duration.text,
        mileText: base.distance.text,
        meter: base.distance.value,
        duration: base.duration.value,
      });
    }
  });
};

module.exports = sumroute;

/*  // console.log(...body.rows); // Shows the possible values
      // const durationText = base.duration.text;
      const base = body.rows[0].elements[0];
      const mileText = base.distance.text;
      const meter = base.distance.value;
      const duration = base.duration.value;
      console.log(mileText); 
      
      sumroute({ origins: 'dallas', destination: 'houston' });
      
      */
