import React from 'react';
import './App.css';
// MUI imports
import { Button, Grid } from '@mui/material';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Message Generator</h1>
      </header>
      <p>Get started by choosing an option below!</p>

      {/* buttons */}
      <Grid
        container 
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Button
          variant="contained"
          style={{ backgroundColor: 'black', color: 'white' }}>
          USE EXISTING TEMPLATE
        </Button>
        <p id="or">OR</p>
        <Button
          variant="contained"
          style={{ backgroundColor: 'black', color: 'white' }}>
          CREATE NEW MESSAGE
        </Button>
      </Grid>

    </div>
  );
};

export default App;
