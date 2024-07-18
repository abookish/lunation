import { StyleSheet } from 'react-native';
import { Calendar, CalendarList } from 'react-native-calendars';
import dateFns from 'date-fns';
import React, {useState, useEffect}from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
//todo async storage
// todo first day/last day stuff
//todo basic math stuff

export function CalendarSelections() {
   
  const [selected, setSelected] = useState<string[]>([])
  let markedDates = Object.fromEntries(
  selected.map((date: any) => [
    date,
    { selected: true, disableTouchEent: true, color: 'green' }
  ])
);
const storeData = async (value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('my-key', jsonValue); //todo add, don't set
  } catch (e) {
    // saving error
  }
};
//todo useEffect with selected as a condition? or better to reformat each time? 
const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('my-key');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};
const fetchData = async () => { //todo make this get/fetch combo more concise or something
  const data = await getData();
  console.log('Stored: ', data);
  setSelected(data)
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
      storeData([...selected, day.dateString]) //todo fix?
  
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
