import { isSameDay, addDays, subDays, parseISO, isAfter, isToday, } from 'date-fns';
import { getCalendarDateString } from 'react-native-calendars/src/services'; //todo check what it's doing, is it safe to leave it here?
import {sortAscendingDateStrings} from './sortingUtils'
import { convertDatestringArrayToDates } from './dateConversionUtils';

export const makeDateDataObject = (dateStringArray: string[]|null) => {
  if (!dateStringArray) {
    return null
  } else{
    return Object.fromEntries(dateStringArray?.map((date: any) => [
      date,
      {
        selected: true, 
        color: 'green' ,
      ...getIsStartandIsEnd(date, dateStringArray)
    }
    ])
  )
  }}

let startEndPairs: Object //todo store start/end pairs but also sete the attributes
export const getIsStartandIsEnd = (dateString: string, dateStringArray: string[]):Object =>{ //get is start and is end, do the iterating in here, 
//convert to date
const date = parseISO(dateString)

//if start date, store, continue through till end date? Or solve separately then combine?
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

export type datesObject = {[date:string]:{ //todo include other attributes?
    startingDay: Boolean,
    endingDay: Boolean,
    periodEnd?:string
}
}

export const getSortedStartDates = (dateDataObject: datesObject): string[] => { //todo store this as a var instead of recalcing
const startingDates = Object.keys(dateDataObject).filter(eachKey => dateDataObject[eachKey].startingDay)
return sortAscendingDateStrings(startingDates)
}
const getSortedEndDates = (dateDataObject: datesObject): string[] => {
  const endingDates = Object.keys(dateDataObject).filter(eachKey => dateDataObject[eachKey].startingDay)
  return sortAscendingDateStrings(endingDates)
  }
//todo maybe don't pass i tin?
export function setPeriodEndDate (dateDataObject: datesObject): any { 
  const startDateStrings = getSortedStartDates(dateDataObject)
  const endDateStrings = getSortedEndDates(dateDataObject)
  startDateStrings.forEach((dateString, index) => {
    console.log(dateString) //todo not a string??
    console.log(dateDataObject)
    console.log(dateDataObject[dateString])
    dateDataObject[dateString].periodEnd= endDateStrings[index] //todo does this mutate original object?
  //  console.log(endDateStrings[index])
})
}
export function getFirstDayLastPeriodString(dateDataObject: datesObject): string {
  //todo update util methods so I'm not converting them back and forth, but later
  const arrayStartDates = getSortedStartDates(dateDataObject)
  return arrayStartDates[-1]

}
export function getPeriodLength (startDate: string, objectsArray: Object[]): void {

}

