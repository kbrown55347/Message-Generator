import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
// MUI imports
import { Button, NativeSelect, Grid } from '@mui/material';


function App() {

  // variable with array of objects for time of day options
  let timeOfDayOptions = [{ id: 1, time: 'morning' }, { id: 2, time: 'afternoon' }, { id: 3, time: 'evening' }];

  // Setup local state for all companies and guests information
  const [companies, setCompanies] = useState([]);
  const [guests, setGuests] = useState([]);
  // Local state to capture user selected values from DOM
  const [selectedTimeOfDay, setSelectedTimeOfDay] = useState(0);
  const [selectedGuestId, setSelectedGuestId] = useState(0);
  const [selectedCompanyId, setSelectedCompanyId] = useState(0);
  // Local state to populate message template
  const [timeOfDay, setTimeOfDay] = useState('(Time of Day)');
  const [guestFirstName, setGuestFirstName] = useState('(Guest First Name)');
  const [companyName, setCompanyName] = useState('(Company Name)');
  const [guestRoomNumber, setGuestRoomNumber] = useState('(Guest Room Number)');

  // declare message template
  let messageTemplate = `Good ${timeOfDay}, ${guestFirstName}! Welcome to ${companyName}.
  Room ${guestRoomNumber} is now ready for you. Please let us know if
  you need anything and enjoy your stay.`;

  useEffect(() => {
    // Call functions to fetch data on page load
    fetchCompanies();
    fetchGuests();
  }, []);

  // Create function to fetch companies
  const fetchCompanies = () => {
    // axios GET /companies route
    axios({
      method: 'GET',
      url: '/companies'
    }).then((response) => {
      // Set local state
      setCompanies(response.data);
    }).catch((error) => {
      console.log('GET /companies failed', error);
    });
  }; // end fetchCompanies

  // Create function to fetch guests
  const fetchGuests = () => {
    // axios GET /guests route
    axios({
      method: 'GET',
      url: '/guests'
    }).then((response) => {
      // Set local state
      setGuests(response.data);
    }).catch((error) => {
      console.log('GET /guests failed', error);
    });
  }; // end fetchGuests

  // function for on click of GENERATE MESSAGE button
  const onGenerateMessageClick = () => {
    // loop through companies array to get company name selected by user
    for (let companyItem of companies) {
      // using double equals bc selectedCompanyId is a string and companyItem.id a number
      if (companyItem.id == selectedCompanyId) {
        setCompanyName(companyItem.company);
      };
    };
    // loop through guests array to get selected guests first name and room number
    for (let guest of guests) {
      if (guest.id == selectedGuestId) {
        setGuestFirstName(guest.firstName);
        setGuestRoomNumber(guest.reservation.roomNumber);
      };
    };
    // set local state for time of day selected by user
    setTimeOfDay(selectedTimeOfDay);
  }; // end onGenerateMessageClick

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Message Generator</h1>
      </header>
      <p className="directions">Get started by choosing an option below!</p>

      {/* existing message template option */}
      <h3 className="option-title">1. Use Existing Message Template</h3>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
      >
        {/* dropdown menu to select time of day */}
        <NativeSelect
          value={selectedTimeOfDay}
          onChange={(event) => setSelectedTimeOfDay(event.target.value)}>
          <option disabled value='0'>
            Select Time of Day
          </option>
          {timeOfDayOptions.map((timeItem) => {
            return (
              <option key={timeItem.id} value={timeItem.time}>
                {timeItem.time}
              </option>
            );
          })}
        </NativeSelect>
        {/* dropdown menu to select guest */}
        <NativeSelect
          value={selectedGuestId}
          onChange={(event) => setSelectedGuestId(event.target.value)}>
          <option disabled value='0'>
            Select Guest
          </option>
          {guests.map((guest) => {
            return (
              <option key={guest.id} value={guest.id}>
                {guest.firstName} {guest.lastName}
              </option>
            );
          })}
        </NativeSelect>
        {/* dropdown menu to select company */}
        <NativeSelect
          value={selectedCompanyId}
          onChange={(event) => setSelectedCompanyId(event.target.value)}>
          <option disabled value='0'>
            Select Company
          </option>
          {companies.map((companyItem) => {
            return (
              <option key={companyItem.id} value={companyItem.id}>
                {companyItem.company}
              </option>
            );
          })}
        </NativeSelect>
        {/* generate message button*/}
        <Button
          variant="contained"
          style={{ backgroundColor: '#314A56', color: 'white' }}
          onClick={onGenerateMessageClick}
        >
          GENERATE MESSAGE
        </Button>
      </Grid>

      <div className="message">
        <p className="directions">Message Output:</p>
        <p className="message">{messageTemplate}</p>
      </div>

      {/* create new message option */}
      <h3 className="option-title">2. Create New Message</h3>
      <Button
        variant="contained"
        style={{ backgroundColor: '#314A56', color: 'white' }}>
        CREATE NEW MESSAGE
      </Button>

    </div >
  );
};

export default App;
