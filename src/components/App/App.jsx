import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
// MUI imports
import { Button } from '@mui/material';


function App() {
  // Setup local state
  const [companies, setCompanies] = useState([]);
  const [guests, setGuests] = useState([]);
  const [messageTemplates, setMessageTemplates] = useState([]);

  useEffect(() => {
    // Call functions to fetch data on page load
    fetchCompanies();
    fetchGuests();
    fetchMessageTemplates();
  }, []);

  // Create function to fetch companies
  const fetchCompanies = () => {
    // axios GET /companies route
    axios({
      method: 'GET',
      url: '/companies'
    }).then((response) => {
      console.log('in GET /companies route', response.data);
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
      console.log('in GET /guests route', response.data);
      // Set state
      setGuests(response.data);
    }).catch((error) => {
      console.log('GET /guests failed', error);
    });
  };

  // Create function to fetch message templates
    const fetchMessageTemplates = () => {
      // axios GET /message-templates route
      axios({
        method: 'GET',
        url: '/message-templates'
      }).then((response) => {
        console.log('in GET /message-templates route', response.data);
        // Set state
        setMessageTemplates(response.data);
      }).catch((error) => {
        console.log('GET /message-templates failed', error);
      });
    };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Message Generator</h1>
      </header>
      <p>Get started by choosing an option below!</p>


      <h3>Use Existing Template</h3>







      <h3>Create New Message</h3>
      <Button
        variant="contained"
        style={{ backgroundColor: 'black', color: 'white' }}>
        CREATE NEW MESSAGE
      </Button>

    </div>
  );
};

export default App;
