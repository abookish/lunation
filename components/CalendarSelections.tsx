import { StyleSheet } from 'react-native';
import { Calendar, CalendarList } from 'react-native-calendars';
import dateFns from 'date-fns';
import React, {useState, useEffect}from 'react';
import {getData, storeData} from '../utils/dataMethods'
import {getIsStartandIsEnd} from '../utils/periodCalcs'
//todo store existing start/end to load correctly
// todo first day/last day stuff
//todo basic math stuff

export function CalendarSelections() {
   
  const [selected, setSelected] = useState<string[]>([])
  let markedDates = Object.fromEntries(
  selected.map((date: any) => [
    date,
    {
      selected: true, color: 'green' ,
    ...getIsStartandIsEnd(date, selected)
  }
  ])
);

const fetchData = async () => { //todo make this get/fetch combo more concise or something
  const data = await getData();
  console.log('Stored: ', data);
  setSelected(data)  //how to handle if I'm instead storing a key/val of datestring: {attributes}
};

useEffect(() => {
  fetchData();
}, []);


  return (
    <Calendar
    markingType={'period'}
    markedDates={markedDates}
    onDayPress={(day:any) => {
      console.log('onDayPress', day)
      setSelected(prevSelected => [...prevSelected, day.dateString]);
      storeData([...selected, day.dateString]) //todo add to storage instead of rewrite lol, add as datestring: object
      //todo store attribute of start, end
  
    }
     }
  
  />
  );
}
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
