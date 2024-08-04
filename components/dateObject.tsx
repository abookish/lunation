import { useEffect, useState } from 'react';
import { getDateObjectsForEndDates, getDateObjectsForStartDates, getIsStartandIsEnd, getSortedDates } from '@/utils/dateObjectMethods';
import { differenceInDays } from 'date-fns';

export type datesObject = {[date:string]:{ //todo include other attributes?
  startingDay: Boolean,
  endingDay: Boolean,
  periodEnd?:string,
  length?: number
}
}

export function DateObject(

  props: { selected: string[]}
){
  const [markedDates, setMarkedDates] = useState<datesObject>({}) 
 

  //when to set end dates?
  function setPeriodEndDate (dateDataObject: datesObject): any {  //todo types
    if (!dateDataObject) {return "YIKES"}  //todo use getDateObjectsForStartDates
    console.log('set period end date')
    const startDateObjects = getDateObjectsForStartDates(dateDataObject)
    const endDateObjects = getDateObjectsForEndDates(dateDataObject)
    const startDateStrings = getSortedDates(startDateObjects) //todo just store start and end dates in a better way
    const endDateStrings = getSortedDates(endDateObjects)
    startDateStrings.forEach((dateString, index) => {
        dateDataObject[dateString].periodEnd= endDateStrings[index] //todo do  still need to set periodEnd?
        let length = differenceInDays(endDateStrings[index], dateString) + 1
        console.log('looping through')
        dateDataObject[dateString].length=length

       //todo make more efficient, store, maybe conditionally update


    
  })
     
     //setLengthsObject? Or add to somehow?
     //differenceInDays 
  
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
