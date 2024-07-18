import { isSameDay, addDays } from 'date-fns';
//todo label groups of days 
//add attribute start
//add attribute end?

//makes sense to recalc, or just store?

 //keep sorted? would be easier maybe?
let startEndPairs: Object //store if it's start or end in the calendar?  probs should store in the moment actually
//todo is it a string or a Date?
export const getIsStartandIsEnd = (dateString: string, dateStringArray: string[]):Object =>{
//convert to date
const date = new Date(dateString)
const dateValue = date.getDate()
const nextDay = date.setDate(dateValue + 1);
const prevDay = date.setDate(dateValue - 1);
const includesTomorrow = dateStringArray.includes(nextDay.toString())
const includesYesterday = dateStringArray.includes(prevDay.toString())
//some operation if found to be startdate so we aren't iterating a million times???
return {
startingDay: includesTomorrow && !includesYesterday,
endingDay: includesYesterday && !includesTomorrow
}



}
//group consecutive days into periodArrays ?
//array of objects, sorted by datestring, if startingDay get all days up till endingDay
//but do we need this? maybe we just want to count days between?
//so every date will need an isStart isEnd value... should I split it somehow?