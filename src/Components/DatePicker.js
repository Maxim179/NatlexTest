import React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';

export default function DateRangePickerValue() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateRangePicker', 'DateRangePicker']}>
        <DemoItem label="Choose date" component="DateRangePicker">
          <DateRangePicker
            defaultValue={[dayjs('2024-05-1'), dayjs('2024-05-31')]}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}