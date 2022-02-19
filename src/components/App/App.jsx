import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
// MUI imports
import { Button, NativeSelect, Grid } from '@mui/material';


function App() {
  // Setup local state
  const [companies, setCompanies] = useState([]);
  const [guests, setGuests] = useState([]);
  // variable with array of objects for time of day
  let timeOfDay = [{id: 1, time: 'morning'}, {id: 2, time: 'afternoon'}, {id: 3, time: 'evening'}];

  // Local state to populate message template
  const [selectedTimeOfDay, setSelectedTimeOfDay] = useState(0);
  const [selectedGuestId, setSelectedGuestId] = useState(0);
  const [selectedCompanyId, setSelectedCompanyId] = useState(0);

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
      // Set state
      setCompanies(response.data);
    }).catch((error) => {
      console.log('GET /companies failed', error);
    });
  };

  // Create function to fetch guests
  const fetchGuests = () => {
    // axios GET /guests route
    axios({
      method: 'GET',
      url: '/guests'
    }).then((response) => {
      // Set state
      setGuests(response.data);
    }).catch((error) => {
      console.log('GET /guests failed', error);
    });
  };

  console.log('selected time of day', selectedTimeOfDay);
  console.log('selected guest id', selectedGuestId);
  console.log('selected company id', selectedCompanyId);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Message Generator</h1>
      </header>
      {/* <p>Get started by choosing an option below:</p> */}

      <h3>Use Existing Template</h3>
      {/* display existing template on DOM */}
      {/* <p>Good morning, Tyler! Welcome to Hotel California.
        Room 305 is now ready for you. Please let us know if
        you need anything and enjoy your stay!</p> */}

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
          {timeOfDay.map((timeItem) => {
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
      </Grid>

      <h3>Create New Message</h3>
      <Button
        variant="contained"
        style={{ backgroundColor: 'black', color: 'white' }}>
        CREATE NEW MESSAGE
      </Button>

    </div >
  );
};

export default App;
