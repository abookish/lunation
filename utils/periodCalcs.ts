import { isSameDay, addDays, subDays, parseISO } from 'date-fns';
import { getCalendarDateString } from 'react-native-calendars/src/services'; //todo
//todo label groups of days 
//add attribute start
//add attribute end?

//makes sense to recalc, or just store?

 //keep sorted? would be easier maybe?
let startEndPairs: Object //store if it's start or end in the calendar?  probs should store in the moment actually
//todo is it a string or a Date?
export const getIsStartandIsEnd = (dateString: string, dateStringArray: string[]):Object =>{
//convert to date
const date = parseISO(dateString)
const nextDay = addDays(date,1)
const prevDay = subDays(date,1);
const includesTomorrow = dateStringArray.includes(getCalendarDateString(nextDay))
const includesYesterday = dateStringArray.includes(getCalendarDateString(prevDay))
//some operation if found to be startdate so we aren't iterating a million times???
return {
startingDay: !includesYesterday,
endingDay:  !includesTomorrow
}

}

type dateObjectsArray = {
    startingDay: Boolean,
    endingDay: Boolean
}

//need objects stored somewhere
export function getEndDateStartDatePairs (dateObjectsArray: dateObjectsArray[]): void {
    let pairs = []
    let startDays = dateObjectsArray.filter(eachObj => {
        eachObj.startingDay = true
    })
    let endDays = dateObjectsArray.filter(eachObj => {
        eachObj.startingDay = true
    })
    startDays.forEach(start => {
        //return first date that is after start
        //maybe sort then split on starts?
    })
}

export function getPeriodLength (startDate: string, objectsArray: Object[]): void {

}
//group consecutive days into periodArrays ?
//array of objects, sorted by datestring, if startingDay get all days up till endingDay
//but do we need this? maybe we just want to count days between?
//so every date will need an isStart isEnd value... should I split it somehow?