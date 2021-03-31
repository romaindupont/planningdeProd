import React from 'react';

import DayPickerInput from 'react-day-picker/DayPickerInput';
import MomentLocaleUtils, {
  formatDate,
  parseDate,
} from 'react-day-picker/moment';
import dateFnsFormat from 'date-fns/format';

const DatePicker = ({changeField,name})=> {
  const changeDay = (day, modifiers) => {
    const newDate = day.toLocaleString();
    const modifierDate = newDate.slice(0,10);
    //console.log(modifierDate)
    changeField(modifierDate)
  }
  const FORMAT = 'DD/MM/yyyy';
  return (
    <DayPickerInput
      inputProps={{ name: name }}
      onDayChange={changeDay}
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
