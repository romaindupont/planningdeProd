import React from 'react';

import DayPickerInput from 'react-day-picker/DayPickerInput';
import MomentLocaleUtils, {
  formatDate,
  parseDate,
} from 'react-day-picker/moment';
import dateFnsFormat from 'date-fns/format';

const DatePicker = ()=> {
  const FORMAT = 'DD/MM/yyyy';
  return (
    <DayPickerInput
      onDayChange={day => console.log(day)}
      format={FORMAT}
      formatDate={formatDate}
      parseDate={parseDate}
      placeholder="JJ/MM/AAAA"
      dayPickerProps={{
        locale: 'fr',
        localeUtils: MomentLocaleUtils,
      }}
      />
  )
}
export default DatePicker;
