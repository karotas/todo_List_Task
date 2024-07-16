import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Modal, Stack } from "@mui/material"
import Nav from './components/reusable/Nav';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material';
import Home from './components/Home';
import SnackBars from './components/reusable/SnackBars';
import PopUp from './components/reusable/PopUp';
import EditModal from './components/reusable/EditModal';
import Context from './store/Context';
function App() {
  let theme = createTheme({
    palette: {
      primary: {
        main: "#fff"
      },
      secondary: {
        main: "#2d3436"
      },

    }
  })
  return (
    <>
     <Context>
     <ThemeProvider
        theme={theme}
      >
        <Nav />
        <Stack
          mt={8}
          bgcolor={"primary"}
        >

          <Home />
          <SnackBars />
          <PopUp/>
          <EditModal/>
        </Stack>
      </ThemeProvider>
     </Context>


    </>
  );
}

export default App;
