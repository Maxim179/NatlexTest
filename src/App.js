import { Typography } from '@mui/material';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationMenu from './Pages/NavigationMenu';
import SettignsPage from './Pages/Options';
import ViewMode from './Pages/ViewMode';
function App() {
  return (
    <header>
    <Typography sx={{backgroundColor:'DarkSeaGreen'}}>Made by Maksim Shastin</Typography>
    <BrowserRouter>
          <NavigationMenu/>      
          <Routes>
            <Route path="/Options" element={<SettignsPage />} />
            <Route path="/ViewMode" element={<ViewMode />} />
          </Routes>
    </BrowserRouter>
    </header>
  );
}

export default App;
