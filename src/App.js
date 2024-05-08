import { Container, Typography } from '@mui/material';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Options from './Pages/Options';
import NavigationMenu from './Pages/NavigationMenu';

function App() {
  return (
    <header>
    <Typography sx={{backgroundColor:'DarkSeaGreen'}}>Made by Maksim Shastin</Typography>
    <BrowserRouter>
          <NavigationMenu/>      
          <Routes>
            <Route path="/options" element={<Options />} />
          </Routes>
      <Container sx={{bgcolor:'grey', alignItems:'center'}}>
      </Container>
    </BrowserRouter>
    </header>
  );
}

export default App;
