import { parseISO } from "date-fns"
import { getCalendarDateString } from "react-native-calendars/src/services"
import {convertDateArrayToDatestring, convertDatestringArrayToDates} from "./dateConversionUtils"

export const sortAscending = (array: any[]): any[] => array.sort((a, b) => a-b)
export const sortDescending = (array: any[]): any[] => array.sort((a, b) => b-a)
export const sortAscendingDateStrings = (dateStringArray: string[]): string[] => 
    { 
        const dateArray =  convertDatestringArrayToDates(dateStringArray)
        const sorted = sortAscending(dateArray).map(eachDate =>getCalendarDateString(eachDate))
      return sorted
    }
    export const sortDescendingDateStrings = (dateStringArray: string[]): string[] => 
      { 
          const dateArray =  convertDatestringArrayToDates(dateStringArray)
          const sorted = sortDescending(dateArray).map(eachDate =>getCalendarDateString(eachDate))
        return sorted
      }