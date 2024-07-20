import { parseISO } from "date-fns"
import { getCalendarDateString } from "react-native-calendars/src/services"
import {convertDateArrayToDatestring, convertDatestringArrayToDates} from "./dateConversionUtils"

export const sortAscending = (array: any[]): any[] => array.sort((a, b) => a-b)
export const sortAscendingDateStrings = (dateStringArray: string[]): string[] => convertDateArrayToDatestring(sortAscending(convertDatestringArrayToDates(dateStringArray)))