import React, { useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Button, Container, Modal, Tab, TextField, Typography } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import { TabContext, TabList, TabPanel } from '@mui/lab';
export default function Pages(){
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function ViewMode(){//надо как-то получать сюда графики из OPtions
    return(
    <Container sx={{ bgcolor: 'FloralWhite', height: 800, alignItems: 'center' }}>
        <Typography>
            Graphs here
        </Typography>
    </Container>
  );
  }
  const [charts, setCharts] = useState([]);
  
  const handleAddChart = () => {
    setCharts([...charts, { type: 'line', name: 'Basic graph', color: 'blue' }]);
  };

  const handleRemoveChart = (index) => {
    const updatedCharts = [...charts];
    updatedCharts.splice(index, 1);
    setCharts(updatedCharts);
  };

  const handleTypeChange = (event, index) => {
    const updatedCharts = [...charts];
    updatedCharts[index].type = event.target.value;
    setCharts(updatedCharts);
  };

  const handleNameChange = (event, index) => {
    const updatedCharts = [...charts];
    updatedCharts[index].name = event.target.value;
    setCharts(updatedCharts);
  };

  const handleColorChange = (event, index) => {
    const updatedCharts = [...charts];
    updatedCharts[index].color = event.target.value;
    setCharts(updatedCharts);
  };
  function SettingsPage() {
    //HOOKS  
    return (
      <Container sx={{ bgcolor: 'FloralWhite', height: 800, alignItems: 'center' }}>
        {charts.map((chart, index) => (
          <ChartAdd
            key={index}
            chart={chart}
            index={index}
            onTypeChange={handleTypeChange}
            onNameChange={handleNameChange}
            onColorChange={handleColorChange}
            onRemove={() => handleRemoveChart(index)}
          />
        ))}
        <Button onClick={handleAddChart} variant="contained" sx={{ padding: 1 }}>
          Add new chart
        </Button>
      </Container>
    );
  }
  const ChartAdd = ({ chart, index, onTypeChange, onNameChange, onColorChange, onRemove }) => { //Getting options from user
    return (
      <Container sx={{ padding: 0.5 }}>
        <Accordion>
          <AccordionSummary aria-controls="panel1-content" id="panel1-header">
            {chart.name}
          </AccordionSummary>
          <AccordionDetails>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              value={chart.name}
              onChange={(event) => onNameChange(event, index)}
              sx={{ padding: 0.5 }}
            />
            <Box sx={{ minWidth: 120, padding: 0.5 }}>
              <FormControl fullWidth>
                <InputLabel id={`chart-type-label-${index}`}>Type</InputLabel>
                <Select
                  labelId={`chart-type-label-${index}`}
                  id={`chart-type-select-${index}`}
                  value={chart.type}
                  label="Type"
                  onChange={(event) => onTypeChange(event, index)}>
                  <MenuItem value={'spline'}>Spline</MenuItem>
                  <MenuItem value={'line'}>Line</MenuItem>
                  <MenuItem value={'area'}>Area</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ minWidth: 120, padding: 0.5 }}>
              <FormControl fullWidth>
                <InputLabel id={`chart-color-select-label-${index}`}>Colour</InputLabel>
                <Select
                  labelId={`chart-color-select-label-${index}`}
                  id={`chart-color-select-${index}`}
                  value={chart.color}
                  label="Color"
                  onChange={(event) => onColorChange(event, index)}>
                  <MenuItem value={'red'}>Red</MenuItem>
                  <MenuItem value={'blue'}>Blue</MenuItem>
                  <MenuItem value={'green'}>Green</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Button onClick={onRemove} variant="outlined" color="error">
              Remove
            </Button>
            <ChartPlot chart={chart} />
          </AccordionDetails>
        </Accordion>
      </Container>
    );
  };
  const ChartPlot = ({ chart }) => { //drawing chart
    const chartOptions = {
      chart: {type: chart.type},
      title: {text: chart.name},
      xAxis: {categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']},
      yAxis: {title: {text: 'Temperature (°C)'}
      },
      series: [
        {
          data: [1, 2, 1, 4, 3, 6, 7, 10, 25, 84, 11, 17],
          color: chart.color
        }
      ]
    };
  
    return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
  };
  return(
    <header>
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ backgroundColor: 'GhostWhite', borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="View Mode" value="1" />
            <Tab label="Settings" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1"><ViewMode/></TabPanel>
        <TabPanel value="2"><SettingsPage/></TabPanel>
      </TabContext>
    </Box>
    </header>
  )
}