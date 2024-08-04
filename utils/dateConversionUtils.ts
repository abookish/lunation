import { parseISO } from "date-fns";
import { getCalendarDateString } from "react-native-calendars/src/services";

export const convertDatestringArrayToDates=(datestrings: string[]): Date[] => datestrings.map(eachDateString => parseISO(eachDateString))
export const convertDateArrayToDatestring = (datearray: Date[]): string[] => datearray.map(eachDate =>getCalendarDateString(eachDate))