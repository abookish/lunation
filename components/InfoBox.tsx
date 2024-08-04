import Table from 'react-bootstrap/Table';
import {getDateObjectsForStartDates, getSortedDates} from '../utils/dateObjectMethods'
import { datesObject } from './DateObject';
import { useEffect, useState } from 'react';

//todo just let with start date objects

function BasicExample(props: { lengthsObject: any}) {


 function getFirstDayLastPeriodString(dateDataObject: datesObject): string {  
  const startDateObjects = getDateObjectsForStartDates(dateDataObject)

  const arrayStartDates = getSortedDates(startDateObjects) //todo just store start and end dates in a better way
  //todo combine/abstract with the startdate objects
  return arrayStartDates.reverse()[0]
} 


  


 



  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td></td>
          <td>period dates</td>
          <td colSpan={2}>data passed in to info box {JSON.stringify(props.lengthsObject)}</td>
        </tr>
  
      </tbody>
    </Table>
  );
}

export default BasicExample;


