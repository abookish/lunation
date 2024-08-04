import Table from 'react-bootstrap/Table';
import {getDateObjectsForStartDates, getSortedDates} from '../utils/dateObjectMethods'
import { datesObject } from './DateObject';

//todo just let with start date objects

export function getFirstDayLastPeriodString(dateDataObject: datesObject): string {  
  const startDateObjects = getDateObjectsForStartDates(dateDataObject)

  const arrayStartDates = getSortedDates(startDateObjects) //todo just store start and end dates in a better way
  //todo combine/abstract with the startdate objects
  return arrayStartDates.reverse()[0]
} 
type lengthsObject = {[date: string]: { //todo make it a map instead ??
length?: number
}}
function getPeriodLengths (dateDataObject: datesObject): lengthsObject {
  let lengthObject: lengthsObject = {}
  const startDateObjects = getDateObjectsForStartDates(dateDataObject)
  for (const [key, value] of Object.entries(startDateObjects)){
    console.log("this is value from period lengths ", value)
    lengthObject[key]={length: value.length}
  }
return lengthObject
  }
  


function BasicExample(props: { dateDataObject: datesObject}) {
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
          <td>Mark</td>
          <td>Otto</td>
          <td>{JSON.stringify(getPeriodLengths(props.dateDataObject))}</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default BasicExample;