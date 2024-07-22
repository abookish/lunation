import { StyleSheet } from 'react-native';
import { Calendar, CalendarList } from 'react-native-calendars';
import dateFns from 'date-fns';
import React, {useState, useEffect}from 'react';
import {getData, storeData} from '../utils/dataMethods'
import { DateObject, getFirstDayLastPeriodString } from './DateObject'
// todo first day/last day stuff
//todo basic math stuff
let selected

export function CalendarSelections(

  props: { selected?: string[]}
) {
   
  const [selected, setSelected] = useState<string[]>(props.selected|| [])
 
let markedDates = DateObject({selected:selected})


useEffect(() => {
console.log(`logging every udpate to selected, it ${selected}`)
}, [selected]);



  return (
    <div>
      <>first date of last period is {getFirstDayLastPeriodString(markedDates)}</>
    <Calendar
    markingType={'period'}
    markedDates= {markedDates}
    onDayPress={(day:any) => {
      console.log('onDayPress', day)
      setSelected(prevSelected => [...prevSelected, day.dateString]);
      storeData([...selected, day.dateString]) 
    }
     }
  />
  </div> 
  );
}
//export {markedDates}
//get selected
//json stringify

//store

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    lineHeight: 32,
    marginTop: -6,
  },
});
//todo maybe this component should ONLY handle selected, pass selected to somewhere else to get the whole object and do operations
//like a DateObject thing that gets passed