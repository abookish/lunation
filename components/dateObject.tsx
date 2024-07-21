import { isSameDay, addDays, subDays, parseISO, isAfter, isToday, } from 'date-fns';
import { getCalendarDateString } from 'react-native-calendars/src/services'; //todo check what it's doing, is it safe to leave it here?
import {sortAscendingDateStrings} from '../utils/sortingUtils'
import { useEffect, useState } from 'react';

type datesObject = {[date:string]:{ //todo include other attributes?
  startingDay: Boolean,
  endingDay: Boolean,
  periodEnd?:string
}
}
export function DateObject(

  props: { selected: string[]}
){
  const [markedDates, setMarkedDates] = useState<datesObject>({}) 


 const getIsStartandIsEnd = (dateString: string, dateStringArray: string[]):Object =>{ //get is start and is end, do the iterating in here, 
//convert to date
const date = parseISO(dateString)

return {
startingDay: getIsStartingDay(date, dateStringArray),
endingDay: getIsEndingDay(date, dateStringArray)
} 

}

const getIsStartingDay = (date: Date, dateStringArray: string[]):Boolean =>{
    const prevDay = subDays(date,1);
    return !dateStringArray.includes(getCalendarDateString(prevDay))
} //todo convert to date elsewhere so we only do it once?
const getIsEndingDay = (date: Date, dateStringArray: string[]):Boolean =>{
const nextDay = addDays(date,1)
return !dateStringArray.includes(getCalendarDateString(nextDay))
} //todo convert to date elsewhere so we only do it once?


 const getSortedStartDates = (dateDataObject: datesObject): string[] => { //todo store this as a var instead of recalcing
const startingDates = Object.keys(dateDataObject).filter(eachKey => dateDataObject[eachKey].startingDay)
return sortAscendingDateStrings(startingDates)
}
const getSortedEndDates = (dateDataObject: datesObject): string[] => {
  const endingDates = Object.keys(dateDataObject).filter(eachKey => dateDataObject[eachKey].endingDay)
  return sortAscendingDateStrings(endingDates)
  }
  //when to set end dates?
  function setPeriodEndDate (dateDataObject: any): any {  //todo types
    if (!dateDataObject) {return "YIKES"}
    const startDateStrings = getSortedStartDates(dateDataObject)
    const endDateStrings = getSortedEndDates(dateDataObject)
    startDateStrings.forEach((dateString, index) => {
     dateDataObject[dateString].periodEnd= endDateStrings[index] //todo does this mutate original object?
  })
  }
   function getFirstDayLastPeriodString(dateDataObject: datesObject): string {
    //todo where to put this??
    
    const arrayStartDates = getSortedStartDates(dateDataObject)
    return arrayStartDates.reverse()[0]
  
  }
   function getPeriodLength (startDate: string, objectsArray: Object[]): void {
  
  }
  function makeDateDataObject (): any
  { if (!props.selected || props.selected.length <1) {
    return null} else {
    return Object.fromEntries(props.selected?.map((date: any) => [
      date,
      {
        selected: true, 
        color: 'green' ,
      ...getIsStartandIsEnd(date, props.selected as string[])
    }
    ])
  )
  }}
  //todo
  useEffect(() => {
    if (props.selected && props.selected.length > 0) {
      setMarkedDates(makeDateDataObject())
    }
    console.log('marked: ', markedDates)
    console.log(props.selected)
  }, [props.selected]);
  useEffect(() => {
    if (Object.keys(markedDates).length > 0) {
      setPeriodEndDate(markedDates); 
    }
    console.log('marked: ', markedDates)
    console.log(props.selected)
  }, [markedDates]);
   
if (!props.selected || props.selected.length < 1) {
  console.log(`dateStringArray was ${props.selected}, returning null`)
  return {}}
 else{
    return markedDates
  }}
