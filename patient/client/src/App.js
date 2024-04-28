import logo from './logo.svg';
import './App.css';
import SpeechComp from './SpeechComp';
import { Stack } from '@mui/material';


function App() {
  return (
    <Stack sx={{width:"100vw", height:"100vh"}} className="App">
      <SpeechComp />
    </Stack>
  );
}

export default App;
