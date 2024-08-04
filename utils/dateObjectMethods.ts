import { datesObject } from "@/components/DateObject";
import { sortAscendingDateStrings } from "./sortingUtils";
import { addDays, parseISO, subDays } from "date-fns";
import { getCalendarDateString } from "react-native-calendars/src/services";

export function getDateObjectsForStartDates(dateDataObject: datesObject): datesObject {
  const filtered = Object.fromEntries(
    Object.entries(dateDataObject).filter(
       ([key, value])=>value.startingDay
    )
 );
  return filtered
}
export function getDateObjectsForEndDates(dateDataObject: datesObject): datesObject { //todo actually store the date up front
  const filtered = Object.fromEntries(
    Object.entries(dateDataObject).filter(
       ([key, value])=>value.endingDay
    )
 );
  return filtered
}
export function getSortedDates (datesDataObject: datesObject): string[] { //todo store this as a var instead of recalcing
  const dateStrings = Object.keys(datesDataObject) //todo store this
  return sortAscendingDateStrings(dateStrings)
  //todo pass in just the filtered objects that are starting days data
  }

  

export const getIsStartingDay = (date: Date, dateStringArray: string[]):Boolean =>{
  const prevDay = subDays(date,1);
  return !dateStringArray.includes(getCalendarDateString(prevDay))
} //todo convert to date elsewhere so we only do it once?
export const getIsEndingDay = (date: Date, dateStringArray: string[]):Boolean =>{
  const nextDay = addDays(date,1)
  return !dateStringArray.includes(getCalendarDateString(nextDay))
} //todo convert to date elsewhere so we only do it once?

export const getIsStartandIsEnd = (dateString: string, dateStringArray: string[]):Object =>{ //get is start and is end, do the iterating in here, 
  //convert to date
  const date = parseISO(dateString)
  
  return {
  startingDay: getIsStartingDay(date, dateStringArray),
  endingDay: getIsEndingDay(date, dateStringArray)
  } 
  
  }

