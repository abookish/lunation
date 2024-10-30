import Table from 'react-bootstrap/Table';
import {getDateObjectsForStartDates, getSortedDates} from '../utils/dateObjectMethods'
import { datesObject } from './DateObject';
import { useEffect, useState } from 'react';
import { sortDescendingDateStrings } from '@/utils/sortingUtils';

//todo just let with start date objects

function BasicExample(props: { lengthsObject: Object}) { //todo rename

 function getFirstDayLastPeriodString(lengthsObject: Object): string {  //todo worth having this be a method or not?
  const arrayStartDates = sortDescendingDateStrings(Object.keys(lengthsObject))
  return arrayStartDates[0]
} 

function getAvgLength(lengthsObject: Object): number { 
  const lengthValues = Object.values(lengthsObject)
 const sum = lengthValues.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0,
);
return sum/lengthValues.length
}

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th> avg length</th>
          <th>first date of last: </th>
          <th>alldata</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>avgLength: {getAvgLength(props.lengthsObject)}</td>
          <td>first day of last {getFirstDayLastPeriodString(props.lengthsObject)}</td>
          <td >col3 data passed in {JSON.stringify(props.lengthsObject)}</td>
        </tr>
  
      </tbody>
    </Table>
  );
}

export default BasicExample;


