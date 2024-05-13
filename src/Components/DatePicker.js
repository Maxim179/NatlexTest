import React, { useState } from 'react';
import { DateRangePicker as ReactDateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

export default function MyDateRangePicker() {
    const [startDate, setStartDate] = useState('05/01/2024');
    const [endDate, setEndDate] = useState('05/10/2024');
    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    }
    return (
        <ReactDateRangePicker
            ranges={[selectionRange]}
            onChange={handleSelect}
        />
    );
}
