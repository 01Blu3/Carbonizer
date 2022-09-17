require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
    body: 'This a test text message !!',
    from: '+15739953828',
    to: '+14693453766',
  })
  .then(message => console.log(message))
  .catch(err => console.log(err));
