import { Typography } from '@mui/material';
import Pages from './Pages/Options';
import MyDateRangePicker from './Components/DatePicker';

export default function App() {
  return (
    <header>
      <Typography sx={{backgroundColor:'DarkSeaGreen'}}>Made by Maksim Shastin</Typography>
      <Pages/>
    </header>
  );
}
