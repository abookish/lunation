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
type lengthsObject = {[date: string] : number | undefined}

function getPeriodLengths (dateDataObject: datesObject): lengthsObject {
  let lengthObject: lengthsObject = {}
  const startDateObjects = getDateObjectsForStartDates(dateDataObject)
  console.log(JSON.stringify(startDateObjects))
  for (const [key, value] of Object.entries(startDateObjects)){
    console.log("this is value from period lengths ", value)
    console.log(`this is value["length"] ${value.length}`)
    lengthObject[key]=value.length
    console.log(lengthObject)
  }
  console.log(lengthObject)
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
          <td></td>
          <td>period dates</td>
          <td colSpan={2}>{JSON.stringify(getPeriodLengths(props.dateDataObject))}</td>
        </tr>
  
      </tbody>
    </Table>
  );
}

export default BasicExample;