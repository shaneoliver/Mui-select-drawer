import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Stack } from '@mui/material';
import { Box, Container } from '@mui/system';
import SelectDrawer from './SelectDrawer';

const theme = createTheme();

const options = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' },
  { value: 'three', label: 'Three' },
];


function App() {

  const [value, setValue] = React.useState('one')

  const handleChange = (value: string) => {
    setValue(value)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Box sx={{ py: 4 }}>
          <Stack direction="row" spacing={2}>
            <Box width={300}>
              <SelectDrawer select={true} handleChange={handleChange} value={value} options={options} />
            </Box>
            <Box width={300}>
              <SelectDrawer select={false} handleChange={handleChange} value={value} options={options} />
            </Box>
          </Stack>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
