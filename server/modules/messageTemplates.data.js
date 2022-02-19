/* populate message templates variable with an array of objects 
other templates can be added in the future */

// declare variables for template, values will be selected by user
let timeOfDay;
let guestName;
let hotelName;
let roomNumber;

const messageTemplates = [
  {
    id: 1,
    title: 'Basic Template',
    template: `Good ${timeOfDay}, ${guestName}! Welcome to ${hotelName}. Room ${roomNumber} is now ready for you. Please let us know if you need anything and enjoy your stay!`
  }
];

module.exports = messageTemplates;