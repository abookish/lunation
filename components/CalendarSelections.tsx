import { StyleSheet } from 'react-native';
import { Calendar, CalendarList } from 'react-native-calendars';
import dateFns from 'date-fns';
import React, {useState}from 'react';
//todo async storage
// todo first day/last day stuff
//todo basic math stuff

export function CalendarSelections() {
   
  const [selected, setSelected] = useState<string[]>([])
  let markedDates = Object.fromEntries(
  selected.map((date: any) => [
    date,
    { selected: true, disableTouchEvent: true, color: 'green' }
  ])
);


  return (
    <Calendar
    markingType={'period'}
    markedDates={markedDates}
    onDayPress={(day:any) => {
      console.log('onDayPress', day)
      setSelected(prevSelected => [...prevSelected, day.dateString]);
    }
     }
  
  />
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    lineHeight: 32,
    marginTop: -6,
  },
});
