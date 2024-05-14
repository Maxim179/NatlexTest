import React from 'react';
import { DateRangePicker as ReactDateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

export default function MyDateRangePicker({ startDate, endDate, onDateChange }) {
    const handleSelect = (ranges) => {
        onDateChange(ranges.selection.startDate, ranges.selection.endDate);
    }

    const selectionRange = {
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        key: 'selection',
    }

    return (
        <ReactDateRangePicker
            ranges={[selectionRange]}
            onChange={handleSelect}
        />
    );
}