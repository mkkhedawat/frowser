import frowser from 'frowser';
import JSON from 'react-json-view';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


import './App.css';
import React from 'react';
import { Typography } from '@mui/material';

const defaultUserAgent = window.navigator.userAgent;

function App() {
  const [ userAgent, setUserAgent ] = React.useState(defaultUserAgent)
  const info = frowser.parse(userAgent || defaultUserAgent, userAgent !== defaultUserAgent);

  return (<Box className="App">
    <Box className="header"><Typography variant='h4'>Frowser</Typography><Typography variant='p'>Not just another browser detection library</Typography>
    </Box>
    <TextField id="outlined-basic" label="Enter User Agent Here"
      variant="outlined"
      value={userAgent}
      onChange={(event) => {
        setUserAgent(event.target.value);
      }}
      className='input-container' />
    <JSON src={info} />
  </Box>);
}

export default App;
