import { StyleSheet } from 'react-native';
import { Calendar, CalendarList } from 'react-native-calendars';
import dateFns from 'date-fns';
import React, {useState, useEffect}from 'react';
import {getData, storeData} from '../utils/dataMethods'
import {getIsStartandIsEnd, makeDateDataObject, setPeriodEndDate} from '../utils/dateObjectMethods'
//todo store existing start/end to load correctly
// todo first day/last day stuff
//todo basic math stuff
let markedDates = {}
let selected

export function CalendarSelections() {
   
  const [selected, setSelected] = useState<string[]>([])
  const [markedDates, setMarkedDates] = useState<string[]>([])
  const [selectedDateObjectArray, setArray] = useState<Object[]>([]) //todo use this properly instead of just calling
 


const fetchData = async () => { //todo make this get/fetch combo more concise or something
  const data = await getData();
  console.log('Stored: ', data);
  if (data) setSelected(data)  //how to handle if I'm instead storing a key/val of datestring: {attributes} maybe only store as dates bc first/last will change w. selection?
  //maybe store a seperate array of
};

useEffect(() => {
  fetchData();
}, []);

useEffect(() => {
  if (selected) {
    setPeriodEndDate(makeDateDataObject(selected)); 
    makeDateDataObject(selected)
  }//todo completely breaks if no data

  console.log(selected)
}, [selected]);


  return (
    <Calendar
    markingType={'period'}
    markedDates={markedDates}
    onDayPress={(day:any) => {
      console.log('onDayPress', day)
      setSelected(prevSelected => [...prevSelected, day.dateString]);
      storeData([...selected, day.dateString]) 
    }
     }
  
  />
  );
}
export {markedDates}
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
