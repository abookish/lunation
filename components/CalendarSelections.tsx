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
    await AsyncStorage.setItem('my-key', jsonValue);
  } catch (e) {
    // saving error
  }
};
const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('my-key');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};
useEffect(() => {
  const fetchData = async () => {
    const data = await getData();
    console.log('Stored: ', data);
  };
  fetchData();
}, []);


  return (
    <Calendar
    markingType={'period'}
    markedDates={markedDates}
    onDayPress={(day:any) => {
      console.log('onDayPress', day)
      setSelected(prevSelected => [...prevSelected, day.dateString]);
    storeData(markedDates) //does it go here??
    console.log('store: ', getData()) //not resolving, why??
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
